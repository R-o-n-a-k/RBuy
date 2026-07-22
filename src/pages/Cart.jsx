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

const Cart = () => {
  const { cartItems } = useCart();
  return (
    <section className='page my-10'>
      <SectionHeading title="Cart" />
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
                $1,283.92
              </p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">
                Tax (8%)
              </p>

              <p className="font-semibold">
                $102.71
              </p>
            </div>

            <Separator />

            <div className="flex items-center justify-between text-lg font-bold">
              <p>Total</p>

              <p>$1,386.63</p>
            </div>

          </CardContent>

          <CardFooter>
            <Button size="lg" className="w-full text-white">
              Checkout
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

export default Cart