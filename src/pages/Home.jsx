import React from 'react'
import { Button } from "@/components/ui/button";
import SectionHeading from '../components/SectionHeading'
import menImage from "../assets/menClothing.jpg";
import womenImage from "../assets/womenClothing.jpg";
import electronicsImage from "../assets/electronics.jpg";
import jewelleryImage from "../assets/jewellery.jpg";
import CategoryCard from '../components/CategoryCard';
import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import { NavLink } from 'react-router-dom';
import Loader from '@/components/Loader';

const Home = () => {

  const { products, loading, error } = useProducts();
  if (loading) return <Loader />;

  if (error) return <h1>{error}</h1>;

  const featuredProducts = products.slice(0, 8);

  const categories = [
    {
      image: menImage,
      buttonText: "Men",
      buttonLink: "/shop/men",
    },
    {
      image: womenImage,
      buttonText: "Women",
      buttonLink: "/shop/women",
    },
    {
      image: jewelleryImage,
      buttonText: "Jewellery",
      buttonLink: "/shop/jewellery",
    },
    {
      image: electronicsImage,
      buttonText: "Electronics",
      buttonLink: "/shop/electronics",
    }
  ];

  return (
    <div className="page">
      <section className="w-full banner mt-4 bg-primary h-80 rounded-sm flex flex-col items-start justify-center pl-4 md:pl-10">
        <h1 className="text-2xl md:text-4xl text-white font-bold text-start">Welcome to RBuy</h1>
        <p className="text-white/80 text-start mt-1 md:mt-2 text-xs md:text-base">Your one-stop shop for all your needs</p>
        <Button asChild size="lg" className="text-white border-white mt-6 px-6 py-2 text-sm md:text-base"
          render={<NavLink to="/shop" />}>
          Shop Now
        </Button>
      </section>



      <section className="my-10">
        <SectionHeading
          title="Featured Categories"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.buttonLink}
              {...category}
            />
          ))}
        </div>
      </section>

      <section className="my-10">
        <SectionHeading
          title="Featured Products"
          linkText="View All"
          linkTo="/shop"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home