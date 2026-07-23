import EmptyList from '@/components/EmptyList';
import SectionHeading from '@/components/SectionHeading'
import React from 'react'

const Wishlist = () => {
  const productList = [];
  return (
    <section className='page my-10'>
      <SectionHeading title="Wishlist" />
      {productList.length === 0 ?
        <EmptyList msg="Nothing saved yet." btnText="Explore Products" /> : <div>Your products</div>
      }
    </section>
  )
}

export default Wishlist