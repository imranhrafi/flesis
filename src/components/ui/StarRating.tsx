import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

type StarRatingProps = {
  rating: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 !== 0; // Check if there is a half star

  return (
    <div className='flex items-center'>
      {rating}
      {/* Render full stars */}
      {Array.from(Array(fullStars)).map((_, index) => (
        <BsStarFill key={index} className='w-4 h-4 ml-1 text-yellow-400' />
      ))}

      {/* Render half star if necessary */}
      {hasHalfStar && (
        <BsStarHalf className='w-4 h-4 text-yellow-400' />
      )}

      {/* Render empty stars */}
      {Array.from(Array(5 - Math.ceil(rating))).map((_, index) => (
        <BsStar key={index} className='w-4 h-4 text-yellow-400' />
      ))}
    </div>
  );
};

export default StarRating;
