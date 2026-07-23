import React from 'react'
import EmptyList from '@/components/EmptyList';
import SectionHeading from '@/components/SectionHeading'

const Orders = () => {
    const orderList = [];
    return (
        <section className='page my-10'>
            <SectionHeading title="My Orders" />
            {orderList.length === 0 ?
                <EmptyList msg="No Orders Yet. Buy your first product." btnText="Shop Products" /> : <div>Your Orders</div>
            }
        </section>
    )
}

export default Orders
