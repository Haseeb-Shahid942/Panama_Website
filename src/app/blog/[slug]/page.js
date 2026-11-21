import { notFound } from 'next/navigation'
import SingleBlogContent from '@/components/Blogs/SingleBlogSetup/SingleBlogContent'
import RelatedBlogs from '@/components/Blogs/SingleBlogSetup/RelatedBlogs'

const CANDIDATE_ENDPOINTS = (slug) => [
  `https://admin.panamatravel.co.uk/api/blogs/post/slug/${encodeURIComponent(slug)}`,
  `https://admin.panamatravel.co.uk/api/blogs/post/?slug=${encodeURIComponent(slug)}`,
  `https://admin.panamatravel.co.uk/api/blogs/post/${encodeURIComponent(slug)}`,
]

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
  try {
    const blog = await getBlogBySlug(params.slug)

    if (!blog) {
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
  } catch (error) {
    console.error('Error in SingleBlogPage:', error);
    notFound()
  }
}