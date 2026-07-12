import React from 'react'
import SectionHeading from '../components/SectionHeading'
import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const { products } = useProducts();

  const mensClothing = products.filter((product) => product.category === "men's clothing");

  const womensClothing = products.filter((product) => product.category === "women's clothing");

  const electronics = products.filter((product) => product.category === "electronics");

  const jewellery = products.filter((product) => product.category === "jewelery");

  return (
    <div className="page">

      <section className="my-10">
        <SectionHeading
          title="Men's Clothing"
          linkText="View All"
          linkTo="/shop/men"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mensClothing.slice(0, 4).map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}
        </div>
      </section>

      <section className="my-10">
        <SectionHeading
          title="Women's Clothing"
          linkText="View All"
          linkTo="/shop/women"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {womensClothing.slice(0, 4).map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}
        </div>
      </section>

      <section className="my-10">
        <SectionHeading
          title="Electronics"
          linkText="View All"
          linkTo="/shop/electronics"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {electronics.slice(0, 4).map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}
        </div>
      </section>

      <section className="my-10">
        <SectionHeading
          title="Jewellery"
          linkText="View All"
          linkTo="/shop/jewellery"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jewellery.slice(0, 4).map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}
        </div>
      </section>

    </div>
  )
}

export default Shop