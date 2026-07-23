import CartProduct from '@/components/CartProduct'
import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator"
import SectionHeading from '@/components/SectionHeading';
import useCart from '@/hooks/useCart';
import EmptyList from '@/components/EmptyList';

const Cart = () => {
  const { cartItems, subtotal, tax, total } = useCart();
  return (
    <section className='page my-10'>
      <SectionHeading title="Cart" />

      {cartItems.length === 0 ?
        <EmptyList msg="Your Cart is Empty." btnText="Browse Products" /> :
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_350px] lg:items-start">
          <div>
            {cartItems.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </div>

          <Card className="h-fit w-full rounded-md lg:sticky lg:top-40">
            <CardHeader>
              <CardTitle className="text-lg font-bold">
                Summary
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                  Subtotal
                </p>

                <p className="font-semibold">
                 $ {subtotal.toFixed(2)}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                  Tax (8%)
                </p>

                <p className="font-semibold">
                 $ {tax.toFixed(2)}
                </p>
              </div>

              <Separator />

              <div className="flex items-center justify-between text-lg font-bold">
                <p>Total</p>

                <p>$ {total.toFixed(2)}</p>
              </div>

            </CardContent>

            <CardFooter>
              <Button size="lg" className="w-full text-white">
                Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>}
    </section>
  )
}

export default Cart