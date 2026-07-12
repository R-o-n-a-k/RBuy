import Button from "./Button";


const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col h-96 hover:shadow-sm transition-shadow duration-300">

      {/* Product Image */}

      <div className="h-44 flex items-center justify-center bg-primary/5 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Product Details */}

      <div className="flex flex-col flex-1 p-4">

        {/* Category */}

        <span className="text-primary text-sm font-semibold capitalize">
          {product.category}
        </span>

        {/* Title */}

        <h3 className="mt-1 font-medium text-gray-800 line-clamp-2 min-h-12">
          {product.title}
        </h3>

        {/* Price & Rating */}

        <div className="mt-1 flex items-center justify-between">
          <span className="text-lg font-semibold">
            ${product.price}
          </span>

          <span className="text-sm text-gray-500">
            ⭐ {product.rating.rate} ({product.rating.count})
          </span>
        </div>

        {/* Button */}

        <Button
          to={`/product/${product.id}`}
          variant="primary"
          className="mt-auto w-full"
          sizes="md"
        >
          View Details
        </Button>

      </div>

    </div>
  );
};

export default ProductCard;