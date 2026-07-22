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

const CartProduct = ({ product }) => {
    return (
        <Card className="mb-4 px-2 w-fit">
            <CardContent className="w-210 flex gap-x-6">
                <img src={product.image} alt={product.title} className="h-24 w-24 shrink-0 overflow-hidden rounded-md bg-primary/5 object-contain p-4" />
                <div className="flex-1 flex flex-col gap-2 justify-center">
                    <h3 className='text-base font-medium'>{product.title}</h3>
                    <Badge variant="outline" className="capitalize text-primary border-primary/20 bg-primary/5">
                        {product.category}
                    </Badge>
                    <p>$ {product.price} <span> each</span></p>
                </div>

                {/* price summary */}
                <div className="flex flex-col gap-2 items-end">
                    <ButtonGroup>
                        <ButtonGroup>
                            <Button variant="outline" size="icon">
                                <Minus />
                            </Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Input
                                id="quantity"
                                type="number"
                                min={1}
                                defaultValue={1}
                                className="w-16"
                            />
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button variant="outline" size="icon" >
                                <PlusIcon />
                            </Button>
                        </ButtonGroup>
                    </ButtonGroup>
                    <p>12 x $2123</p>
                    <Button variant="link" className="text-destructive p-0">Remove</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CartProduct