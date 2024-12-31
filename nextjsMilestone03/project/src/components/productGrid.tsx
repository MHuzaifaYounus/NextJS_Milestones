"use client"
import React, { useEffect, useState } from "react";



import {
  Card,
} from "@/components/ui/card"
import ProductCARD from "./productCard";
import { client } from "@/sanity/lib/client";


interface Products {
  id: number,
  title: string,
  price: number,
  description: string,
  image: string,
  rating: { rate: number, count: number }
  category: string,
  stock: number,
  isDiscont: boolean,
  discount?: number
}

const ProductGrid = () => {
  const [products, setProducts] = useState<Products[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    async function getData() {
      const data = await client.fetch(`*[_type == "product"]{
  id,
  title,
  price,
  description,
  category,
  stock,
  isDiscont,
  discount,
  "image": image.asset->url,
  rating {
    rate,
    count
  }
}
`)
      setProducts(data)
      setIsLoading(false)
    }
    getData()
  }, [])

  return (
    <div className="xl:w-[80%] w-full">


      {isLoading ?
        (<div className="flex flex-col items-center grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 md:grid">
          {Array.from({ length: 9 }).map((_, index) => (
            <Card key={index} className="overflow-hidden w-[350px] h-[500px] mt-10 bg-gray-400 animate-pulse duration-1000">

            </Card>
          ))}
        </div>) :
        (<div className="flex flex-col items-center grid-cols-1  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4 p-4 sm:grid">
          {products.map((product, index) => (
            <ProductCARD key={index} id={product.id} isDiscont={product.isDiscont} title={product.title} price={product.price} description={product.description} image={product.image} rate={product.rating.rate} count={product.rating.count} stock={product.stock} category={product.category} discount={product.discount} />
          ))}
        </div>)}




      <div className="flex justify-center mt-6">
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          &lt;&lt;
        </button>
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          1
        </button>
        <button className="px-3 py-1 mx-1 text-white bg-primary_color rounded">2</button>
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          3
        </button>
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
