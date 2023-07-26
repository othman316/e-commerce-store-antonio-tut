'use client'
import usePreviewModal from '@/hooks/use-preview-modal'
import { FC } from 'react'

import Modal from '@/components/ui/modal'
import Gallery from '@/components/gallery'
import Info from '@/components/info'

interface PreviewModalProps {}

const PreviewModal: FC<PreviewModalProps> = ({}) => {
  const previewModal = usePreviewModal()
  const {
    data: product,
    isOpen,
    onClose,
    onOpen,
  } = usePreviewModal(state => state)

  if (!product) return null

  return (
    <Modal onClose={onClose} open={isOpen}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 ">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product?.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  )
}

export default PreviewModal
