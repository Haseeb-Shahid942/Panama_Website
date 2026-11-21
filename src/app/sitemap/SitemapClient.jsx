'use client'

import { useEffect, useState } from 'react'

export default function SitemapClient() {
  const [items, setItems] = useState([])
  const [err, setErr] = useState('')

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/sitemap.xml', { cache: 'no-store' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const xmlText = await res.text()

        const parser = new DOMParser()
        const xml = parser.parseFromString(xmlText, 'application/xml')

        // Error check
        const parseErr = xml.querySelector('parsererror')
        if (parseErr) throw new Error('Invalid XML')

        const urls = Array.from(xml.getElementsByTagName('url')).map((u) => {
          const loc = u.getElementsByTagName('loc')[0]?.textContent || ''
          const lastmod =
            u.getElementsByTagName('lastmod')[0]?.textContent || ''
          const changefreq =
            u.getElementsByTagName('changefreq')[0]?.textContent || ''
          const priority =
            u.getElementsByTagName('priority')[0]?.textContent || ''

          return { loc, lastmod, changefreq, priority }
        })

        setItems(urls)
      } catch (e) {
        setErr(e.message || 'Failed to load sitemap')
      }
    }
    load()
  }, [])

  return (
    <div className="max-w-5xl mt-24 mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Panama Travel Sitemap</h1>
      <p className="text-gray-600 mb-8">
        A complete list of accessible pages on our website for easy navigation and quick access to all our travel services.
      </p>
      {err ? (
        <div className="p-4 rounded border border-red-300 bg-red-50 text-red-700">
          Failed to load sitemap: {err}
        </div>
      ) : items.length === 0 ? (
        <div className="text-gray-500">Loading sitemap...</div>
      ) : (
        <div>
          <p className="text-sm text-gray-600 mb-6">
            Found {items.length} pages on our website. Click any link to visit the page.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {items.map((it) => (
              <a
                key={it.loc}
                href={it.loc}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <li className="rounded-lg border border-gray-200 p-4 hover:shadow-md transition hover:border-primary/20">
                  <span className="group-hover:font-semibold group-hover:underline group-hover:text-primary">
                    {it.loc}
                  </span>

                  <div className="mt-2 text-xs text-gray-600 flex flex-wrap gap-3">
                    {it.changefreq && (
                      <span>
                        <strong>Update frequency:</strong> {it.changefreq}
                      </span>
                    )}
                    {it.priority && (
                      <span>
                        <strong>Priority:</strong> {it.priority}
                      </span>
                    )}
                    {it.lastmod && (
                      <span>
                        <strong>Last modified:</strong>{' '}
                        {new Date(it.lastmod).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </li>
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}