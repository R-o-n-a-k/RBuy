import React from 'react'
import SectionHeading from '../components/SectionHeading'

const Shop = () => {
  return (
    <div className="page">

      <section className="my-10">
        <SectionHeading
          title="Men's Clothing"
          linkText="View All"
          linkTo="/shop/men"
        />
      </section>

      <section className="my-10">
        <SectionHeading
          title="Women's Clothing"
          linkText="View All"
          linkTo="/shop/women"
        />
      </section>

      <section className="my-10">
        <SectionHeading
          title="Electronics"
          linkText="View All"
          linkTo="/shop/electronics"
        />
      </section>

      <section className="my-10">
        <SectionHeading
          title="Jewellery"
          linkText="View All"
          linkTo="/shop/jewellery"
        />
      </section>

    </div>
  )
}

export default Shop