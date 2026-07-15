import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CategoryCard = ({ image, buttonText, buttonLink, className = "" }) => {
  return (
    <Card
      className={`relative overflow-hidden p-0 hover:shadow-sm transition-shadow duration-300 ${className}`}
    >
      <img
        src={image}
        alt={buttonText}
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
      />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <Button asChild size="lg" className="text-white">
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </Card>
  );
};

export default CategoryCard;