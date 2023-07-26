'use client'

import PreviewModal from '@/components/preview-modal'
import { FC, useEffect, useState } from 'react'

interface ModalProviderProps {}

const ModalProvider: FC<ModalProviderProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [])
  if (!isMounted) return null

  return (
    <>
      <PreviewModal />
    </>
  )
}

export default ModalProvider
