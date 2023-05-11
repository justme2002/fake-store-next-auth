import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import Container from '@/components/root/Container'
import ProductList from '@/components/ProductList/ProductList'
import { GetServerSideProps } from 'next'
import { getProducts } from '@/services/fake_store_service/fakeStoreService'
import { Product } from '@/interfaces/Product'

export default function Home({ products }: { products: Product[] }) {  
  console.log(products)
  return (
    <Container>
    <div className='mt-[100px]'>
      <ProductList products={products}/>
    </div>
    </Container>
  )
}

export const getServerSideProps : GetServerSideProps = async (context) => {
  const products = await getProducts()
  return {
    props: {
      products
    }
  }
}
