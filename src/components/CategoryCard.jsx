import Button from "./Button";


const CategoryCard = ({
  image,
  buttonText,
  buttonLink,
  className = "",
}) => {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <img
        src={image}
        alt={buttonText}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <Button
          to={buttonLink}
          variant="primary"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;