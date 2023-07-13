import { FaStar, FaStarHalfAlt } from "react-icons/fa";
interface RatingStarsProps {
  rate: number;
}

const RatingStars = ({ rate }: RatingStarsProps) => {
  const stars = [];

  const integerPart = Math.floor(rate);
  const decimalPart = rate % 1;

  for (let i = 0; i < integerPart; i++) {
    stars.push(<FaStar key={i} className="text-yellow-500" />);
  }

  if (decimalPart > 0) {
    stars.push(<FaStarHalfAlt key={stars.length} className="text-yellow-500" />);
  }

  return <>{stars}</>;
};

export default RatingStars;
