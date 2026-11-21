function TestimonialCard({ i, rating = 5, small_heading, short_sentence, customer_name, published_date }) {
  return (
    <div className="bg-transparent p-4 flex flex-col items-start w-[25%] h-auto box-border" data-aos="fade-right" data-aos-delay={i * 300 || 100}>
      <span className="flex text-yellow-400 mb-1 text-xl">
        {[...Array(rating)].map((_, i) => (
          <span key={i}>&#9733;</span>
        ))}
      </span>
      <span className="w-[200px] font-semibold">{small_heading}</span>
      <p className="text-sm w-[200px] text-gray-800 mb-1 truncate">{short_sentence}</p>
      <span className="text-xs w-[200px] text-gray-600">
        {customer_name} - {published_date}
      </span>
    </div>
  );
}

export default TestimonialCard;