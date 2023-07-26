'use client'
import { formatter } from '@/lib/utils'
import { FC, useEffect, useState } from 'react'

interface CurrencyProps {
  value?: string | number
}

const Currency: FC<CurrencyProps> = ({ value }) => {
  // to avoid hydration errors
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [])
  if (!isMounted) return null

  return <div className="font-semibold">{formatter.format(Number(value))}</div>
}

export default Currency
