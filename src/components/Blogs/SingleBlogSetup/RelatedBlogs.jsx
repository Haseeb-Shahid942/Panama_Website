'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../BlogCard";

export default function RelatedBlogs({
    blogId,
    slug,
    categoryIds = [],
    tags = [],
    limit = 3,
    title = "Related Posts",
}) {
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState("");
    const [items, setItems] = useState([]);

    useEffect(() => {
        let isMounted = true;

        async function loadRelated() {
            setLoading(true);
            setErr("");
            try {
                const params = {
                    limit,
                    mode: 'and',            // default 'and', but you can set 'or'
                    status: 'published',    // or 'draft' while testing
                    blog_id: blogId,
                    slug,
                    category_ids: categoryIds?.join(','),
                    tags: tags?.join(','),
                };

                const res = await axios.get(`https://admin.panamatravel.co.uk/api/blogs/related`, { params });
                const rows = Array.isArray(res.data)
                    ? res.data
                    : (res.data?.blogs || []);
                if (!isMounted) return;
                // exclude the current one just in case
                const filtered = rows.filter(
                    (b) => (blogId ? b.id !== blogId : true) && (slug ? b.slug !== slug : true)
                );
                setItems(filtered.slice(0, limit));
            } catch (e) {
                if (!isMounted) return;
                setErr(e?.response?.data?.error || "Failed to load related posts");
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        loadRelated();
        return () => { isMounted = false; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blogId, slug, JSON.stringify(categoryIds), JSON.stringify(tags), limit]);

    if (loading) {
        return (
            <section className="mt-12">
                <h3 className="text-2xl font-bold mb-4">Related Posts</h3>
                <div className="text-gray-500">Loading related…</div>
            </section>
        );
    }

    if (err) {
        console.error('Related blogs error:', err);
        return null; // or render a subtle placeholder
    }

    return (
        <section className="mt-12">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <div className="flex flex-wrap justify-center md:justify-start items-stretch gap-3">
                {items.length === 0 ? (
                    <div className="text-gray-500 text-center w-full py-8">No related posts found.</div>
                ) : items.map((b, index) => (
                    <BlogCard
                        key={b.id || `related-${index}`}
                        index={index}
                        image={b.featured_image_url || b.canonical_url}
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
        </section>
    );
}
