import ProductGrid from '@/components/productGrid'
import Sidebar from '@/components/sidebar'
import React from 'react'

const ProductsPage = () => {
  return (
    <div className='w-full pt-20 pb-20 flex justify-between max-xl:relative'>
      
        <Sidebar />
        <ProductGrid />
    </div>
  )
}

export default ProductsPage