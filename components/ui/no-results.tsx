import { FC } from 'react'

interface NoResultsProps {
  message?: string
}

const NoResults: FC<NoResultsProps> = ({ message }) => {
  return (
    <div className="flex items-center justify-center h-full w-full text-neutral-500">
      {!message ? 'No Results Found' : message}
    </div>
  )
}

export default NoResults
