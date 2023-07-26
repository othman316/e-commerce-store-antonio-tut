'use client'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { ShoppingBag } from 'lucide-react'

import Button from '@/components/ui/Button'
import useCart from '@/hooks/use-cart'

interface NavBarActionsProps {}

const NavBarActions: FC<NavBarActionsProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [isMounted])

  const { addItem, items, removeAll, removeItem } = useCart()
  const router = useRouter()

  if (!isMounted) return null

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push('/cart')}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {items.length}
        </span>
      </Button>
    </div>
  )
}

export default NavBarActions
