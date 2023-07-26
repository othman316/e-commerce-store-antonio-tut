import { cn } from '@/lib/utils'
import { FC, MouseEventHandler, ReactElement } from 'react'

interface IconButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
  icon: ReactElement
  className?: string
}

const IconButton: FC<IconButtonProps> = ({ className, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition',
        className
      )}
    >
      {icon}
    </button>
  )
}

export default IconButton
