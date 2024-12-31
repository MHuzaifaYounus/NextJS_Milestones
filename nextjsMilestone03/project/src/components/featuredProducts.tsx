"use client"
import React, { useEffect, useState } from 'react'
import { client } from "@/sanity/lib/client";
import ProductCARD from './productCard';

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
const FeaturedProducts = ({ featureType }: { featureType: "Sale" | "Top" }) => {
    const [products, setProducts] = useState<Products[]>([])

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
            
        }
        getData()
    }, [])

    return (
        <div className="items-box w-full flex justify-between mt-4 flex-wrap max-sm:justify-center">

            {products.map((product, index) => {
                if (featureType === "Sale") {
                    if (product.isDiscont === true) {
                        return <ProductCARD key={index} id={product.id} isDiscont={product.isDiscont} title={product.title} price={product.price} description={product.description} image={product.image} rate={product.rating.rate} count={product.rating.count} stock={product.stock} category={product.category} discount={product.discount} />
                    }
                }
                else if(featureType === "Top"){
                    if (product.rating.rate === 5) {
                        return <ProductCARD key={index} id={product.id} isDiscont={product.isDiscont} title={product.title} price={product.price} description={product.description} image={product.image} rate={product.rating.rate} count={product.rating.count} stock={product.stock} category={product.category} discount={product.discount} />
                    }
                }

            })}

        </div>
    )
}

export default FeaturedProducts