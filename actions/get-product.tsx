import { Product } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
  productId: string
}

const getProduct = async (query: Query): Promise<Product> => {
  const res = await fetch(`${URL}/${query.productId}`)
  return res.json()
}

export default getProduct
