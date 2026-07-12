import React from 'react'
import { useParams } from "react-router-dom";
import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';

const categoryConfig = {
  men: {
    api: "men's clothing",
    title: "Men's Clothing",
  },
  women: {
    api: "women's clothing",
    title: "Women's Clothing",
  },
  jewellery: {
    api: "jewelery",
    title: "Jewellery",
  },
  electronics: {
    api: "electronics",
    title: "Electronics",
  },
};


const Category = () => {
  const { category } = useParams();

  const { products } = useProducts();

  const filteredProducts = products.filter((product) => product.category === categoryConfig[category].api);

  return (
    <>

      <section className="page my-10">
        <SectionHeading
          title={categoryConfig[category].title}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Category