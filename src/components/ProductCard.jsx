import { NavLink } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "@/components/ui/card";

const ProductCard = ({ product }) => {
    return (
        <Card className="flex md:h-92 w-full max-w-sm flex-col overflow-hidden py-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm">
            {/* Product Image */}
            <div className="flex h-36 md:h-44 items-center justify-center bg-primary/5 p-4">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full object-contain transition-transform duration-500 hover:scale-105"
                />
            </div>

            <CardHeader className="flex flex-col gap-1">
                <Badge variant="outline" className="capitalize text-primary border-primary/20 bg-primary/5">
                    {product.category}
                </Badge>
                <CardTitle className="text-sm line-clamp-2 min-h-6 md:min-h-10 font-medium">
                    {product.title}
                </CardTitle>

                <CardDescription className="w-full">
                    <div className="mt-1 flex w-full items-center justify-between">
                        <span className="text-base font-semibold text-foreground">
                            ${product.price}
                        </span>
                        <span className="text-xs text-muted-foreground">
                            ⭐ {product.rating.rate} ({product.rating.count})
                        </span>
                    </div>
                </CardDescription>

            </CardHeader>

            <CardFooter className="px-4">
                <Button
                    size="lg"
                    className="text-white w-full text-xs md:text-sm"
                    render={<NavLink to={`/product/${product.id}`} />}
                >View Details</Button>
            </CardFooter>

        </Card>
    );
};

export default ProductCard;

