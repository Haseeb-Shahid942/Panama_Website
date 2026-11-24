'use client'

import Link from 'next/link'

// Shown when the blog post exists but the admin API could not return it.
// Deliberately NOT a 404 page - the article is real, the backend is down.
export default function BlogError({ error, reset }) {
  return (
    <div className="container mx-auto px-4 mt-20 py-24 text-center">
      <h1 className="text-3xl font-bold text-[#0b4f6c]">
        This article is temporarily unavailable
      </h1>

      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        The post exists, but we could not load it right now. Please try again in
        a few minutes.
      </p>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={reset}
          className="rounded-md bg-[#0b4f6c] px-6 py-3 text-white hover:opacity-90"
        >
          Try again
        </button>

        <Link
          href="/blogs/"
          className="rounded-md border border-[#0b4f6c] px-6 py-3 text-[#0b4f6c] hover:bg-gray-50"
        >
          All articles
        </Link>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Need help? <Link href="/contact-us/" className="underline">Contact us</Link>
      </p>

      {error?.digest ? (
        <p className="mt-8 text-xs text-gray-400">Reference: {error.digest}</p>
      ) : null}
    </div>
  )
}
