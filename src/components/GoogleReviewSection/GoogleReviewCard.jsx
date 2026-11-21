// components/reviews/GoogleReviewCard.jsx
import { Star } from "lucide-react";

function Stars({ value = 0 }) {
  const filled = Math.round(value);
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < filled ? "fill-current" : ""}`}
          aria-hidden="true"
        />
      ))}
      <span className="ml-2 text-xs text-gray-500">{value.toFixed(1)}</span>
    </div>
  );
}

export default function GoogleReviewCard({
  customer_name = "Google User",
  avatar = "/images/google-avatar-placeholder.png",
  rating = 5,
  published_date = "2 weeks ago",
  testimonial_text = "",
  google_link = "#",
}) {
  return (
    <article className="h-full md:min-h-[230px] lg:min-h-[250px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow transition">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold truncate">{customer_name}</h3>
            {/* Google badge */}
            <span className="inline-flex items-center gap-1 rounded-full border px-2 py-[2px] text-[11px] font-medium text-gray-700">
              <svg width="12" height="12" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#4285F4" d="M24 9.5c3.94 0 7.1 1.6 9.28 3.8l6.3-6.3C35.8 2.37 30.37 0 24 0 14.62 0 6.69 5.37 3 13.15l7.67 5.94C12.33 13.35 17.7 9.5 24 9.5z"/>
                <path fill="#34A853" d="M46.5 24c0-1.46-.13-2.86-.37-4.19H24v8.13h12.66c-.55 2.96-2.22 5.47-4.73 7.16l7.22 5.6C43.67 36.5 46.5 30.7 46.5 24z"/>
                <path fill="#FBBC05" d="M10.67 19.09l-7.67-5.94C1.06 15.66 0 19.68 0 24c0 4.32 1.06 8.34 3 11.85l7.67-5.94C9.53 28.03 9 26.07 9 24c0-2.07.53-4.03 1.67-5.91z"/>
                <path fill="#EA4335" d="M24 48c6.37 0 11.77-2.1 15.72-5.72l-7.22-5.6c-2.02 1.36-4.62 2.17-8.5 2.17-6.29 0-11.65-3.86-13.32-9.59l-7.67 5.94C6.69 42.63 14.62 48 24 48z"/>
              </svg>
              Google
            </span>
          </div>
          <div className="text-xs text-gray-500">{published_date}</div>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-3 text-yellow-500">
        <Stars value={rating} />
      </div>

      {/* Text */}
      <p className="mt-3 text-sm text-gray-700 line-clamp-6">{testimonial_text}</p>

      {/* Footer */}
      <div className="mt-4 md:absolute bottom-2">
        <a
          href={google_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          Read on Google Maps →
        </a>
      </div>
    </article>
  );
}
