import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'
import Gallery from '@/components/gallery'
import Info from '@/components/info'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'
import { FC } from 'react'

interface ProductProps {
  params: { productId: string }
}

const Product: FC<ProductProps> = async ({ params }) => {
  const product = await getProduct({ productId: params.productId })

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  })
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          {product.name}
          <ProductList
            items={suggestedProducts.filter(
              suggestedProduct => suggestedProduct.id !== product.id
            )}
            title="Related Products"
          />
        </div>
      </Container>
    </div>
  )
}

export default Product
