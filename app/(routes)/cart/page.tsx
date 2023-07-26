'use client'
import { FC, useEffect, useState } from 'react'

import Container from '@/components/ui/container'
import useCart from '@/hooks/use-cart'
import ProductList from '@/components/product-list'
import NoResults from '@/components/ui/no-results'
import CartItem from './components/cart-item'
import Summary from './components/summary'

interface CartProps {}

const Cart: FC<CartProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [])

  const { items } = useCart()

  if (!isMounted) return null
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {items.length === 0 && (
                <NoResults message="No Items Added to Cart" />
              )}
              <ul>
                {items.map(item => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Cart
