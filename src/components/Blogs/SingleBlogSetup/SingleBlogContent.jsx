"use client";

import Link from "next/link";
import { useMemo, useEffect } from "react";
import InquiryForm from "../../UI/Forms/InquiryForm";
import { trackBlogView } from "@/utils/facebookPixel";

function readingTimeFromHTML(html = "") {
  const text = String(html).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const words = text ? text.split(" ").length : 0;
  return Math.max(1, Math.round(words / 200));
}

function fmtDate(dt) {
  if (!dt) return "";
  const d = new Date(dt);
  if (Number.isNaN(d.getTime())) return dt;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export default function SingleBlogContent({ blog, loading, error, backHref = "/blogs/" }) {
  const readMins = useMemo(() => readingTimeFromHTML(blog?.content_html || ""), [blog]);

  // Track blog view
  useEffect(() => {
    if (blog && !loading && !error) {
      trackBlogView({
        title: blog.title,
        id: blog.id,
        slug: blog.slug,
      });
    }
  }, [blog, loading, error]);

  return (
    <div className="container mx-auto">
      {/* Breadcrumb */}
      <div className="mb-4">
        <Link href={backHref} className="inline-block text-blue-600 hover:underline">
          &larr; Back to Blogs
        </Link>
      </div>

      {/* States */}
      {loading && <div className="py-16 text-center text-gray-500">Loading…</div>}

      {!loading && error && (
        <div className="py-12 text-center">
          <p className="text-red-600">{error}</p>
          <Link href={backHref} className="text-blue-600 underline">Go to blog list</Link>
        </div>
      )}

      {!loading && !error && blog && (
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* Main Content */}
          <article className="max-w-4xl">
            {/* Title */}
            <header className="mb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{blog.title}</h1>
            </header>

            {/* Canonical Image */}
            {blog.canonical_url && (
              <div className="mb-6 overflow-hidden rounded-xl border">
                <img
                  src={blog.canonical_url}
                  alt={blog.title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            )}

            {/* Meta */}
            <div className="my-2 flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <span>{fmtDate(blog.published_at || blog.created_at)}</span>
              {readMins ? <span>• {readMins} min read</span> : null}
              {Array.isArray(blog.categories) && blog.categories.length > 0 && (
                <>
                  <span>•</span>
                  <div className="flex flex-wrap gap-1">
                    {blog.categories.map((c) => (
                      <span key={c.id ?? c.name} className="rounded-md border px-2 py-0.5 text-xs">
                        {c.name}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="country-html-content prose max-w-none bg-white py-4 md:py-6">
              {blog.content_html ? (
                <div dangerouslySetInnerHTML={{ __html: blog.content_html }} />
              ) : (
                <p>No content.</p>
              )}
            </div>

            {/* Tags */}
            {Array.isArray(blog.tags) && blog.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {blog.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded border text-gray-600">#{t}</span>
                ))}
              </div>
            )}
          </article>

          {/* Sidebar with Inquiry Form */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <InquiryForm 
              title="Plan Your Trip" 
              context={`Blog: ${blog.title}`}
            />
          </aside>
        </div>
      )}
    </div>
  );
}
