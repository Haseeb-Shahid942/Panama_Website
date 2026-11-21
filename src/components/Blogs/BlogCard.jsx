import Link from "next/link";

const BlogCard = ({
  index = 0,
  image,
  imgtitle,
  title,
  excerpt,
  slug,
  categories = [],
  tags = [],
  publishedAt,
}) => {
  return (
    <div
      className="w-[390px] bg-primary rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-2xl border-[1px] hover:border-black cursor-pointer flex flex-col min-h-[300px]"
      data-aos="fade-right"
      data-aos-delay={index * 200}
    >
      {/* Image section (same height as TicketCard) */}
      <div className="h-48">
        <Link href={`/blog/${slug}/`} title={title}>
          <img
            src={image || "https://placehold.co/600x400?text=Blog"}
            alt={title}
            title={imgtitle || title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </Link>
      </div>

      {/* Content section */}
      <div className="p-4 flex-1 flex flex-col">
        <Link href={slug ? `/blog/${slug}/` : "#"} className="block">
          <h2 className="text-xl font-semibold text-white hover:underline line-clamp-2">
            {title}
          </h2>
        </Link>

        {/* Categories / Tags (in place of priceDetails) */}
        <div className="mt-2 mb-2 flex flex-wrap gap-1">
          {Array.isArray(categories) && categories.length > 0
            ? categories.map((c) => (
                <span
                  key={c.id ?? c.name}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-white/10 text-white border border-white/20"
                >
                  {c.name}
                </span>
              ))
            : Array.isArray(tags) &&
              tags.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-white/10 text-white border border-white/20"
                >
                  #{t}
                </span>
              ))}
        </div>

        {/* Excerpt */}
        <p className="text-white/90 text-sm line-clamp-3">{excerpt || " "}</p>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[11px] text-white/70">
            {publishedAt
              ? new Date(publishedAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : ""}
          </span>
          <Link
            href={slug ? `/blog/${slug}/` : "#"}
            className="text-sm font-semibold text-white underline underline-offset-4 hover:opacity-90"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
