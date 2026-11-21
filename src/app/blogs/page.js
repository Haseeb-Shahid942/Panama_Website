import { Suspense } from 'react'
import BlogsClient from './BlogsClient'

export const metadata = {
  title: 'Travel Insights & Deals | Panama Travel Blog',
  description: 'Explore our travel blog for flight deals, travel tips, and destination guides. Stay inspired with Panama Travel UK.',
  alternates: {
    canonical: 'https://www.panamatravel.co.uk/blogs/',
  },
  openGraph: {
    title: 'Travel Insights & Deals | Panama Travel Blog',
    description: 'Explore our travel blog for flight deals, travel tips, and destination guides. Stay inspired with Panama Travel UK.',
    url: 'https://www.panamatravel.co.uk/blogs/',
    siteName: 'Panama Travel',
    type: 'website',
  },
}

function BlogsLoading() {
  return (
    <div className="container mx-auto px-4 mt-20 py-16">
      <div className="py-16 text-center text-gray-500 w-full">Loading blogs…</div>
    </div>
  )
}

export default function BlogsPage() {
  return (
    <Suspense fallback={<BlogsLoading />}>
      <BlogsClient />
    </Suspense>
  )
}

const API_URL = 'https://admin.panamatravel.co.uk/api/blogs/posts'

// export default function BlogsPage() {
//   const searchParams = useSearchParams()
//   const router = useRouter()
//   const [loading, setLoading] = useState(true)
//   const [err, setErr] = useState('')
//   const [blogs, setBlogs] = useState([])
//   const [categories, setCategories] = useState([])

//   const [q, setQ] = useState(searchParams.get('q') || '')
//   const [cat, setCat] = useState(searchParams.get('cat') || 'all')

//   async function load() {
//     try {
//       setLoading(true)
//       setErr('')
//       const res = await axios.get(API_URL)
//       const rows = Array.isArray(res.data) ? res.data : res.data?.blogs || []
//       setBlogs(rows)

//       const catSet = new Map()
//       rows.forEach((b) => {
//         if (Array.isArray(b.categories)) {
//           b.categories.forEach((c) => {
//             if (!catSet.has(String(c.id))) catSet.set(String(c.id), c.name)
//           })
//         }
//         if (!Array.isArray(b.categories) && Array.isArray(b.tags)) {
//           b.tags.forEach((t) => {
//             const key = `tag:${t}`
//             if (!catSet.has(key)) catSet.set(key, `#${t}`)
//           })
//         }
//       })
//       setCategories(['all', ...Array.from(catSet.entries()).map(([id, name]) => ({ id, name }))])
//     } catch (e) {
//       console.error(e)
//       setErr(e?.response?.data?.error || 'Failed to load blogs')
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     load()
//   }, [])

//   const filtered = useMemo(() => {
//     const needle = q.trim().toLowerCase()
//     return blogs.filter((b) => {
//       const matchesQ =
//         !needle ||
//         (b.title || '').toLowerCase().includes(needle) ||
//         (b.slug || '').toLowerCase().includes(needle) ||
//         (b.excerpt || '').toLowerCase().includes(needle)

//       if (cat === 'all') return matchesQ

//       const byId = /^\d+$/.test(String(cat))
//       if (byId && Array.isArray(b.categories)) {
//         return matchesQ && b.categories.some((c) => String(c.id) === String(cat))
//       }
//       if (String(cat).startsWith('tag:') && Array.isArray(b.tags)) {
//         const tag = String(cat).slice(4)
//         return matchesQ && b.tags.includes(tag)
//       }
//       if (Array.isArray(b.categories)) {
//         return matchesQ && b.categories.some((c) => String(c.name).toLowerCase() === String(cat).toLowerCase())
//       }
//       return matchesQ
//     })
//   }, [blogs, q, cat])

//   function applyFilters() {
//     const params = new URLSearchParams()
//     if (q.trim()) params.set('q', q.trim())
//     if (cat !== 'all') params.set('cat', cat)

//     const queryString = params.toString()
//     router.push(`/blogs${queryString ? `?${queryString}` : ''}`)
//   }

//   return (
//     <div className="container mx-auto px-4 mt-20 py-16">
//       {/* Header */}
//       <div className="mb-6">
//         <Link href="/" className="inline-block text-blue-600 hover:underline">
//           &larr; Back to Home
//         </Link>
//         <h1 className="mt-3 text-3xl md:text-4xl font-bold">Travel Blog</h1>
//         <p className="text-gray-600">Guides, tips, and inspiration from Panama Travel.</p>
//       </div>

//       {/* Toolbar */}
//       <div className="mb-6 flex flex-wrap items-center gap-3">
//         <input
//           value={q}
//           onChange={(e) => setQ(e.target.value)}
//           placeholder="Search by title, slug, excerpt…"
//           className="w-full max-w-md flex-1 min-w-[220px] rounded-lg border-2 border-gray-200 px-3 py-2 focus:ring-2 focus:ring-blue-200"
//         />
//         <select
//           value={cat}
//           onChange={(e) => setCat(e.target.value)}
//           className="rounded-lg border-2 border-gray-200 px-3 py-2"
//         >
//           {Array.isArray(categories) &&
//             categories.map((c) =>
//               c === 'all' ? (
//                 <option key="all" value="all">
//                   All
//                 </option>
//               ) : (
//                 <option key={c.id} value={c.id}>
//                   {c.name}
//                 </option>
//               )
//             )}
//         </select>
//         <button onClick={applyFilters} className="rounded-lg border-2 border-gray-200 px-4 py-2 hover:bg-gray-50">
//           Apply
//         </button>
//         <button
//           onClick={() => {
//             setQ('')
//             setCat('all')
//             router.push('/blogs')
//           }}
//           className="rounded-lg border-2 border-gray-200 px-4 py-2 hover:bg-gray-50"
//         >
//           Reset
//         </button>
//       </div>

//       {/* Cards */}
//       <section className="airlines bg-transparent py-2" id="blogs-section">
//         <div className="max-w-7xl mx-auto px-0">
//           <div className="flex flex-wrap justify-center items-stretch gap-3">
//             {loading && <div className="py-16 text-center text-gray-500 w-full">Loading blogs…</div>}
//             {!loading && err && <div className="py-10 text-center text-red-600 w-full">{err}</div>}
//             {!loading && !err && filtered.length === 0 && (
//               <div className="py-10 text-center text-gray-500 w-full">No blogs found.</div>
//             )}
//             {!loading &&
//               !err &&
//               filtered.map((b, index) => (
//                 <BlogCard
//                   key={b.id}
//                   index={index}
//                   image={b.canonical_url}
//                   imgtitle={b.title}
//                   title={b.title}
//                   excerpt={b.excerpt}
//                   slug={b.slug}
//                   categories={Array.isArray(b.categories) ? b.categories : []}
//                   tags={Array.isArray(b.tags) ? b.tags : []}
//                   publishedAt={b.published_at || b.created_at}
//                 />
//               ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }