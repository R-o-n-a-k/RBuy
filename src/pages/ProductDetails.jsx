import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import { Button } from '@/components/ui/button';

const ProductDetails = () => {
  const { id } = useParams();

  const { products } = useProducts();

  const product = products.find((item) => item.id === Number(id));

  if (!product) return <h1>Loading...</h1>;


  return (
    <div className="page">
      <h1>{product.title}</h1>

      <img
        src={product.image}
        alt={product.title}
        width={200}
      />

      <h2>${product.price}</h2>

      <p>{product.description}</p>

      <Button asChild className="text-white text-xs md:text-sm">
        <NavLink to="/shop">Back to Shop</NavLink>
      </Button>
    </div>
  )
}

export default ProductDetails