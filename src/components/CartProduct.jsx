import React from 'react'
import {
    Card,
    CardContent
} from "@/components/ui/card"
import { Button } from './ui/button'
import { Input } from './ui/input'
import { ButtonGroup } from './ui/button-group'
import { Minus, PlusIcon } from 'lucide-react'
import { Badge } from "@/components/ui/badge";
import useCart from '@/hooks/useCart'

const CartProduct = ({ product }) => {
    const {
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    return (
        <Card className="mb-4 w-full">
            <CardContent className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                {/* Product Image */}
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-24 w-24 shrink-0 overflow-hidden rounded-md bg-primary/5 object-contain p-4"
                />

                {/* Product Information */}
                <div className="flex min-w-0 flex-col gap-2">
                    <Badge variant="outline" className="capitalize text-primary border-primary/20 bg-primary/5 w-fit">
                        {product.category}
                    </Badge>
                    <h3 className="truncate text-base font-medium sm:line-clamp-2">
                        {product.title}
                    </h3>
                    <p>$ {product.price} <span>each</span></p>
                </div>

                {/* price summary */}
                <div className="flex flex-col items-start gap-2 sm:items-end">
                    <ButtonGroup>
                        <ButtonGroup>
                            <Button variant="outline" size="icon"
                                onClick={() =>
                                    decreaseQuantity(product.id)
                                }>
                                <Minus />
                            </Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Input
                                id="quantity"
                                type="number"
                                min={1}
                                value={product.quantity}
                                className="w-16"
                            />
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button variant="outline" size="icon"
                                onClick={() =>
                                    increaseQuantity(product.id)
                                }>
                                <PlusIcon />
                            </Button>
                        </ButtonGroup>
                    </ButtonGroup>
                    <p> ${(product.quantity * product.price).toFixed(2)}</p>
                    <Button variant="link" className="text-destructive p-0" onClick={() => removeFromCart(product.id)}>Remove</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CartProduct