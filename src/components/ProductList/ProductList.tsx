import React from 'react'
import Card from '../root/Card'
import Container from '../root/Container'
import { Product } from '@/interfaces/Product'

interface ProductListProps {
  products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className='
      grid 
      xl:grid-cols-4
      lg:grid-cols-3
      md:grid-cols-2 
      grid-cols-2
      gap-3
      '>
      {products.map(product => {
        return (
          <Card 
            title={product.title} 
            image={product.image}
            price={product.price}
          />
        )
      })}
    </div>
  )
}

export default ProductList