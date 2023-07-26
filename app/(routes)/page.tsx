import getBillboard from '@/actions/get-billboards'
import getProducts from '@/actions/get-products'
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'
import { FC } from 'react'

interface HomePageProps {}

const HomePage: FC<HomePageProps> = async ({}) => {
  const billboard =
    (await getBillboard('877b82d7-76d3-4bf6-b90d-e66442d9be33')) || {}
  const products = (await getProducts({ isFeatured: true })) || []
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
