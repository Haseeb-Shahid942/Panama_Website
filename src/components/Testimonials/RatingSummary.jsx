import Link from "next/link";

function RatingSummary({ logoimg, altimg = "Logo", logorating = 4.7, logolink = "#" }) {
  const rating = logorating; // This value can be dynamic
  const maxRating = 5;

  // Calculate the number of full stars, half stars, and empty stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxRating - Math.ceil(rating);

  return (
    <div className="flex flex-col items-center mb-6">
      <div className="flex items-center space-x-3">
        {/* Stars and Rating */}
        <div className="flex items-center space-x-1">
          {/* Full stars */}
          <span className="text-yellow-400 text-2xl">
            {[...Array(fullStars)].map((_, i) => (
              <span key={i}>&#9733;</span>
            ))}
          </span>
          {/* Half star */}
          {hasHalfStar && <span className="text-yellow-400 text-2xl">&#9733;</span>}
          {/* Empty stars */}
          {[...Array(emptyStars)].map((_, i) => (
            <span key={fullStars + i} className="text-gray-300 text-2xl">&#9733;</span>
          ))}
          {/* Rating number */}
          <span className="font-bold text-xl">{rating}/5</span>
        </div>

        {/* Feefo Logo */}
        <Link href={logolink}>
          <img src={logoimg} alt={altimg} width={130} height={60} className="inline ml-2" />
        </Link>
      </div>

      {/* Review Count */}
      {/* <span className="text-sm mt-2 text-gray-700">
        Independent Service Rating based on 598 verified reviews.{' '}
        <a href="#" className="text-blue-600 underline">Read all reviews</a>
      </span> */}
    </div>
  );
}

export default RatingSummary;
