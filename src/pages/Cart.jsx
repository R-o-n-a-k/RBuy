import CartProduct from '@/components/CartProduct'
import React from 'react'
import useProducts from '../hooks/useProducts';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator"
import SectionHeading from '@/components/SectionHeading';

const Cart = () => {
  const { products, loading, error } = useProducts();

  const cartProducts = products.slice(0, 3);
  return (
    <section className='page my-10'>
      <SectionHeading title="Cart" />
      <div className="flex mx-auto justify-between">
        <div>
          {cartProducts.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
        </div>

        <Card className="h-fit w-sm rounded-xl">
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              Summary
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
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

            <div className="flex items-center justify-between text-xl font-bold">
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