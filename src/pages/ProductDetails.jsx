import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart } from 'lucide-react';
import { Input } from "@/components/ui/input";

const ProductDetails = () => {
  const { id } = useParams();

  const { products } = useProducts();

  const product = products.find((item) => item.id === Number(id));

  if (!product) return <h1>Loading...</h1>;


  return (
    <div className="page grid grid-cols-1 gap-8 lg:grid-cols-2 mx-auto py-8 max-w-full">
      {/* Product Image */}

      <div className="rounded-md bg-primary/5 p-8 shadow-sm">
        <img
          src={product.image}
          alt={product.title}
          className="h-82 md:h-92 w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}

      <div className="space-y-2">
        
        <div className="flex items-center justify-between">

        <Badge variant="outline" className="capitalize text-primary border-primary/20 bg-primary/5">
          {product.category}
        </Badge>

        <Button asChild variant="link" className="text-primary p-0">
          <NavLink to="/shop">
            Back to Shop
          </NavLink>
        </Button>
        
        </div>

        <h1 className="text-xl font-bold leading-tight md:text-3xl">
          {product.title}
        </h1>

        <h2 className="text-xl md:text-2xl font-bold text-primary">
          ${product.price}
        </h2>

        <span className="text-xs md:text-sm text-muted-foreground">
          ⭐ {product.rating.rate} ({product.rating.count})
        </span>

        <p className="my-8 text-sm text-muted-foreground">
          {product.description}
        </p>

        <div className="flex gap-4">
          <div className="flex items-center gap-3">
            <label htmlFor="quantity" className="text-sm font-medium">
              Qty
            </label>
            <Input
              id="quantity"
              type="number"
              min={1}
              defaultValue={1}
              className="w-16 h-9"
            />
          </div>

          <Button asChild className="text-white" size='lg'>
            Add to Cart
          </Button>

          <Button asChild variant="outline" className="flex" size='lg'>
            <Heart />
            Add to Wishlist
          </Button>

        </div>

      </div>
    </div>
  )
}

export default ProductDetails