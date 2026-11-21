'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import axios from 'axios'
import BlogCard from '@/components/Blogs/BlogCard'

const API_URL = 'https://admin.panamatravel.co.uk/api/blogs/posts'
const PAGE_SIZE = 6
const CACHE_KEY = 'panama_blogs_list_v1'
const CATEGORIES_CACHE_KEY = 'panama_blogs_categories_v1'
const ONE_DAY_MS = 24 * 60 * 60 * 1000

function normalizeRows(data) {
  return Array.isArray(data) ? data : data?.blogs || []
}

function buildCategoriesFromRows(rows) {
  const catSet = new Map()
  rows.forEach((b) => {
    if (Array.isArray(b.categories)) {
      b.categories.forEach((c) => {
        if (!catSet.has(String(c.id))) catSet.set(String(c.id), c.name)
      })
    }
    if (!Array.isArray(b.categories) && Array.isArray(b.tags)) {
      b.tags.forEach((t) => {
        const key = `tag:${t}`
        if (!catSet.has(key)) catSet.set(key, `#${t}`)
      })
    }
  })
  return ['all', ...Array.from(catSet.entries()).map(([id, name]) => ({ id, name }))]
}

function isPlainBlogRow(b) {
  return b != null && typeof b === 'object' && !Array.isArray(b)
}

function isValidBlogRows(rows) {
  if (!Array.isArray(rows)) return false
  return rows.every(isPlainBlogRow)
}

function isValidCategoriesList(categories) {
  if (!Array.isArray(categories) || categories.length === 0) return false
  if (categories[0] !== 'all') return false
  for (let i = 1; i < categories.length; i++) {
    const c = categories[i]
    if (!c || typeof c !== 'object' || Array.isArray(c)) return false
    if (c.id == null || c.name == null) return false
  }
  return true
}

function clearBlogsCaches() {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(CACHE_KEY)
    localStorage.removeItem(CATEGORIES_CACHE_KEY)
  } catch {
    /* ignore */
  }
}

function readValidCategoriesCache(expectedSavedAt) {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(CATEGORIES_CACHE_KEY)
    if (!raw) return null
    const o = JSON.parse(raw)
    if (!isValidCategoriesList(o?.categories)) return null
    if (typeof o.savedAt !== 'number' || o.savedAt !== expectedSavedAt) return null
    if (Date.now() - o.savedAt > ONE_DAY_MS) return null
    return o.categories
  } catch {
    return null
  }
}

/** Returns normalized cache object or null; clears storage if corrupt or expired */
function readValidCache() {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const o = JSON.parse(raw)
    if (typeof o.savedAt !== 'number' || Date.now() - o.savedAt > ONE_DAY_MS) {
      clearBlogsCaches()
      return null
    }
    if (!isValidBlogRows(o.blogs)) {
      clearBlogsCaches()
      return null
    }
    if (o.fullList != null && !isValidBlogRows(o.fullList)) {
      clearBlogsCaches()
      return null
    }
    if (o.mode !== 'local' && o.mode !== 'server') {
      clearBlogsCaches()
      return null
    }
    if (typeof o.exhausted !== 'boolean') {
      clearBlogsCaches()
      return null
    }

    let categories = readValidCategoriesCache(o.savedAt)
    if (!categories) {
      try {
        categories = buildCategoriesFromRows(o.fullList ?? o.blogs)
      } catch {
        clearBlogsCaches()
        return null
      }
      if (!isValidCategoriesList(categories)) {
        clearBlogsCaches()
        return null
      }
    }

    return { ...o, categories }
  } catch {
    clearBlogsCaches()
    return null
  }
}

function persistCache({ blogs, fullList, exhausted, mode }) {
  if (typeof window === 'undefined') return
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    let prev = null
    if (raw) {
      try {
        prev = JSON.parse(raw)
      } catch {
        prev = null
      }
    }
    const savedAt =
      prev?.savedAt != null && Date.now() - prev.savedAt <= ONE_DAY_MS ? prev.savedAt : Date.now()
    const rowsForCategories = fullList ?? blogs
    let categories
    try {
      categories = buildCategoriesFromRows(rowsForCategories)
    } catch {
      categories = ['all']
    }
    const payload = {
      savedAt,
      blogs,
      fullList: fullList ?? null,
      exhausted,
      mode,
    }
    localStorage.setItem(CACHE_KEY, JSON.stringify(payload))
    localStorage.setItem(
      CATEGORIES_CACHE_KEY,
      JSON.stringify({ savedAt, categories })
    )
  } catch (e) {
    console.warn('blogs cache persist failed', e)
  }
}

function mergeById(prev, next) {
  const seen = new Set(prev.map((b) => b.id).filter(Boolean))
  const out = [...prev]
  for (const b of next) {
    const id = b.id
    if (id != null) {
      if (seen.has(id)) continue
      seen.add(id)
    }
    out.push(b)
  }
  return out
}

export default function BlogsClient() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [err, setErr] = useState('')
  const [blogs, setBlogs] = useState([])
  /** When API returns more than PAGE_SIZE in one response, we paginate locally from this list */
  const [fullList, setFullList] = useState(null)
  const [mode, setMode] = useState('server')
  const [exhausted, setExhausted] = useState(false)

  const [q, setQ] = useState(searchParams.get('q') || '')
  const [cat, setCat] = useState(searchParams.get('cat') || 'all')

  const [categories, setCategories] = useState(['all'])

  const fetchPage = useCallback(async (offset) => {
    const res = await axios.get(API_URL, {
      params: {
        limit: PAGE_SIZE,
        offset,
      },
    })
    return normalizeRows(res.data)
  }, [])

  const applyFirstPageData = useCallback((rows) => {
    if (rows.length > PAGE_SIZE) {
      const fl = rows
      setFullList(fl)
      setMode('local')
      setBlogs(fl.slice(0, PAGE_SIZE))
      setExhausted(fl.length <= PAGE_SIZE)
      setCategories(buildCategoriesFromRows(fl))
      persistCache({
        blogs: fl.slice(0, PAGE_SIZE),
        fullList: fl,
        exhausted: fl.length <= PAGE_SIZE,
        mode: 'local',
      })
    } else {
      setFullList(null)
      setMode('server')
      setBlogs(rows)
      setExhausted(rows.length < PAGE_SIZE)
      setCategories(buildCategoriesFromRows(rows))
      persistCache({
        blogs: rows,
        fullList: null,
        exhausted: rows.length < PAGE_SIZE,
        mode: 'server',
      })
    }
  }, [])

  useEffect(() => {
    setCategories(buildCategoriesFromRows(fullList ?? blogs))
  }, [fullList, blogs])

  useEffect(() => {
    let cancelled = false

    async function initialLoad() {
      try {
        const cached = readValidCache()
        if (cached) {
          setBlogs(cached.blogs)
          setFullList(cached.fullList ?? null)
          setMode(cached.mode === 'local' ? 'local' : 'server')
          setExhausted(!!cached.exhausted)
          setCategories(cached.categories)
          setLoading(false)
          return
        }
      } catch (e) {
        console.warn('blogs cache hydrate failed', e)
        clearBlogsCaches()
      }

      if (cancelled) return
      setLoading(true)
      setErr('')
      let lastErr = null
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          const rows = await fetchPage(0)
          if (cancelled) return
          applyFirstPageData(rows)
          lastErr = null
          break
        } catch (e) {
          console.error(e)
          lastErr = e
          clearBlogsCaches()
        }
      }
      if (lastErr && !cancelled) {
        setErr(lastErr?.response?.data?.error || 'Failed to load blogs')
      }
      if (!cancelled) setLoading(false)
    }

    initialLoad()
    return () => {
      cancelled = true
    }
  }, [fetchPage, applyFirstPageData])

  const loadMore = useCallback(async () => {
    if (exhausted || loadingMore) return

    if (mode === 'local' && fullList) {
      const nextLen = Math.min(blogs.length + PAGE_SIZE, fullList.length)
      const nextBlogs = fullList.slice(0, nextLen)
      const done = nextLen >= fullList.length
      setBlogs(nextBlogs)
      setExhausted(done)
      persistCache({
        blogs: nextBlogs,
        fullList,
        exhausted: done,
        mode: 'local',
      })
      return
    }

    try {
      setLoadingMore(true)
      const next = await fetchPage(blogs.length)
      if (next.length === 0) {
        setExhausted(true)
        persistCache({
          blogs,
          fullList,
          exhausted: true,
          mode: 'server',
        })
        return
      }
      if (next.length > PAGE_SIZE) {
        const fl = mergeById(blogs, next)
        setFullList(fl)
        setMode('local')
        const nextBlogs = fl.slice(0, blogs.length + PAGE_SIZE)
        const done = nextBlogs.length >= fl.length
        setBlogs(nextBlogs)
        setExhausted(done)
        persistCache({
          blogs: nextBlogs,
          fullList: fl,
          exhausted: done,
          mode: 'local',
        })
        return
      }
      const merged = mergeById(blogs, next)
      setBlogs(merged)
      const done = next.length < PAGE_SIZE
      setExhausted(done)
      persistCache({
        blogs: merged,
        fullList: null,
        exhausted: done,
        mode: 'server',
      })
    } catch (e) {
      console.error(e)
      clearBlogsCaches()
      setErr('')
      setLoading(true)
      try {
        const rows = await fetchPage(0)
        applyFirstPageData(rows)
      } catch (e2) {
        console.error(e2)
        setErr(e2?.response?.data?.error || 'Failed to load blogs')
      } finally {
        setLoading(false)
      }
    } finally {
      setLoadingMore(false)
    }
  }, [
    exhausted,
    loadingMore,
    mode,
    fullList,
    blogs,
    fetchPage,
    applyFirstPageData,
  ])

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return blogs.filter((b) => {
      const matchesQ =
        !needle ||
        (b.title || '').toLowerCase().includes(needle) ||
        (b.slug || '').toLowerCase().includes(needle) ||
        (b.excerpt || '').toLowerCase().includes(needle)

      if (cat === 'all') return matchesQ

      const byId = /^\d+$/.test(String(cat))
      if (byId && Array.isArray(b.categories)) {
        return matchesQ && b.categories.some((c) => String(c.id) === String(cat))
      }
      if (String(cat).startsWith('tag:') && Array.isArray(b.tags)) {
        const tag = String(cat).slice(4)
        return matchesQ && b.tags.includes(tag)
      }
      if (Array.isArray(b.categories)) {
        return matchesQ && b.categories.some((c) => String(c.name).toLowerCase() === String(cat).toLowerCase())
      }
      return matchesQ
    })
  }, [blogs, q, cat])

  function applyFilters() {
    const params = new URLSearchParams()
    if (q.trim()) params.set('q', q.trim())
    if (cat !== 'all') params.set('cat', cat)

    const queryString = params.toString()
    router.push(`/blogs${queryString ? `?${queryString}` : ''}`)
  }

  const showLoadMore = !loading && !err && !exhausted

  return (
    <div className="container mx-auto px-4 mt-20 py-16">
      {/* Header */}
      <div className="mb-6">
        <Link href="/" className="inline-block text-blue-600 hover:underline">
          &larr; Back to Home
        </Link>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold">Travel Blog</h1>
        <p className="text-gray-600">Guides, tips, and inspiration from Panama Travel.</p>
      </div>

      {/* Toolbar */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by title, slug, excerpt…"
          className="w-full max-w-md flex-1 min-w-[220px] rounded-lg border-2 border-gray-200 px-3 py-2 focus:ring-2 focus:ring-blue-200"
        />
        <select
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className="rounded-lg border-2 border-gray-200 px-3 py-2"
        >
          {Array.isArray(categories) &&
            categories.map((c) =>
              c === 'all' ? (
                <option key="all" value="all">
                  All
                </option>
              ) : (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              )
            )}
        </select>
        <button onClick={applyFilters} className="rounded-lg border-2 border-gray-200 px-4 py-2 hover:bg-gray-50">
          Apply
        </button>
        <button
          onClick={() => {
            setQ('')
            setCat('all')
            router.push('/blogs')
          }}
          className="rounded-lg border-2 border-gray-200 px-4 py-2 hover:bg-gray-50"
        >
          Reset
        </button>
      </div>

      {/* Cards */}
      <section className="airlines bg-transparent py-2" id="blogs-section">
        <div className="max-w-7xl mx-auto px-0">
          <div className="flex flex-wrap justify-center items-stretch gap-3">
            {loading && <div className="py-16 text-center text-gray-500 w-full">Loading blogs…</div>}
            {!loading && err && <div className="py-10 text-center text-red-600 w-full">{err}</div>}
            {!loading && !err && filtered.length === 0 && (
              <div className="py-10 text-center text-gray-500 w-full">No blogs found.</div>
            )}
            {!loading &&
              !err &&
              filtered.map((b, index) => (
                <BlogCard
                  key={b.id || index}
                  index={index}
                  image={b.canonical_url}
                  imgtitle={b.title}
                  title={b.title}
                  excerpt={b.excerpt}
                  slug={b.slug}
                  categories={Array.isArray(b.categories) ? b.categories : []}
                  tags={Array.isArray(b.tags) ? b.tags : []}
                  publishedAt={b.published_at || b.created_at}
                />
              ))}
          </div>
          {showLoadMore && (
            <div className="flex justify-center mt-10">
              <button
                type="button"
                onClick={loadMore}
                disabled={loadingMore}
                className="rounded-lg border-2 border-gray-200 px-6 py-2.5 font-medium hover:bg-gray-50 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loadingMore ? 'Loading…' : 'Load more'}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
