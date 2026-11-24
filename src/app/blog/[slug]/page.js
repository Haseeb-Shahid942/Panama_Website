import { notFound } from 'next/navigation'
import SingleBlogContent from '@/components/Blogs/SingleBlogSetup/SingleBlogContent'
import RelatedBlogs from '@/components/Blogs/SingleBlogSetup/RelatedBlogs'

const ADMIN_API = 'https://admin.panamatravel.co.uk/api/blogs'

// The real single-post route is /post/<slug>; the others are kept as fallbacks
// in case the admin API is changed.
const CANDIDATE_ENDPOINTS = (slug) => [
  `${ADMIN_API}/post/${encodeURIComponent(slug)}`,
  `${ADMIN_API}/post/slug/${encodeURIComponent(slug)}`,
  `${ADMIN_API}/post/?slug=${encodeURIComponent(slug)}`,
]

// The listing endpoint works even while the single-post endpoint is failing.
// We use it to tell two very different situations apart:
//   - slug is NOT in the list  -> the post really does not exist -> 404
//   - slug IS in the list      -> the admin API is broken        -> 5xx
// Returning 404 for a backend outage would tell Google these URLs do not
// exist and get every blog post de-indexed, so never do that.
async function slugExistsInList(slug) {
  try {
    const res = await fetch(`${ADMIN_API}/posts`, { next: { revalidate: 300 } })
    if (!res.ok) return false
    const data = await res.json()
    const blogs = Array.isArray(data?.blogs) ? data.blogs : []
    return blogs.some((b) => b?.slug === slug)
  } catch (error) {
    console.error('Blog listing check failed:', error)
    return false
  }
}

async function getBlogBySlug(slug) {
  if (!slug) return null;

  for (const url of CANDIDATE_ENDPOINTS(slug)) {
    try {
      const res = await fetch(url, {
        next: { revalidate: 3600 }, // Revalidate every hour
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })

      if (!res.ok) {
        console.warn(`API returned ${res.status} for ${url}`);
        continue;
      }

      const data = await res.json()
      let found = null

      if (data?.ok && data?.blog) found = data.blog
      else if (data?.ok && Array.isArray(data.blogs)) found = data.blogs.find((b) => b.slug === slug) || data.blogs[0]
      else if (Array.isArray(data)) found = data.find((b) => b.slug === slug) || null
      else if (data && data.slug) found = data

      if (found) {
        return found
      }
    } catch (error) {
      console.error(`Error fetching from ${url}:`, error)
      continue
    }
  }

  return null
}

export async function generateMetadata({ params }) {
  try {
    const blog = await getBlogBySlug(params.slug)

    if (!blog) {
      return {
        title: 'Blog Not Found - Panama Travel',
        description: 'The requested blog post could not be found.',
      }
    }

    const canonicalUrl = `https://www.panamatravel.co.uk/blog/${params.slug}/`

    return {
      title: `${blog.title || 'Blog Post'} - Panama Travel`,
      description: blog.excerpt || blog.meta_description || 'Read this blog post from Panama Travel',
      keywords: blog.tags ? blog.tags.join(', ') : 'travel, blog, panama travel',
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: blog.title,
        description: blog.excerpt || blog.meta_description,
        url: canonicalUrl,
        siteName: 'Panama Travel',
        images: blog.canonical_url ? [{ url: blog.canonical_url, alt: blog.title }] : [],
        type: 'article',
        publishedTime: blog.published_at,
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.title,
        description: blog.excerpt || blog.meta_description,
        images: blog.canonical_url ? [blog.canonical_url] : [],
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post - Panama Travel',
      description: 'Read this blog post from Panama Travel',
    }
  }
}

export default async function SingleBlogPage({ params }) {
  const blog = await getBlogBySlug(params.slug)

  if (!blog) {
    // Does the post exist at all? If it does, this is a backend outage, not a
    // missing page - throw so Next.js answers 5xx and search engines retry.
    if (await slugExistsInList(params.slug)) {
      throw new Error(
        `Blog "${params.slug}" exists in the listing but the admin API could not return it. ` +
        `Check https://admin.panamatravel.co.uk/api/blogs/post/${params.slug}`
      )
    }
    notFound()
  }

  return (
    <div className="container mx-auto px-4 mt-20 py-16">
      <SingleBlogContent blog={blog} loading={false} error="" backHref="/blogs/" />

      {/* Related section */}
      <RelatedBlogs
        blogId={blog.id}
        slug={blog.slug}
        categoryIds={blog.category_ids || (blog.categories || []).map((c) => c.id).filter(Boolean)}
        tags={blog.tags || []}
        limit={3}
        title="Related Posts"
      />
    </div>
  )
}