import { FC } from 'react'

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; {new Date().getFullYear()} Fake E-commerce Store, Inc. All
          rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
