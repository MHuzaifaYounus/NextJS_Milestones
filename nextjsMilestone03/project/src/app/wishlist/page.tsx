"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import { WishlistProducts } from '../global';
import { client } from '@/sanity/lib/client';
import ProductCARD from '@/components/productCard';
import { Card } from '@/components/ui/card';



const WishList = () => {

    const [products, setProducts] = useState<Products[]>([])
    const [wishlistproducts, setWishlistProducts] = useState<Products[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        async function getData() {
            const data: Products[] = await client.fetch(`*[_type == "product"]{
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
    useEffect(() => {
        console.log("Products change");
        products.forEach((product) => {
            WishlistProducts.forEach((productId) => {
                if (product.id === productId) {
                    setWishlistProducts((prev) => {
                        if (!prev.some(item => item.id === product.id)) {
                            return [...prev, product];
                        }
                        return prev;
                    });
                }
            });
        });
    }, [products, WishlistProducts])

    return (
        <div>
            <div className="section1 w-[79%] pt-10 m-auto pb-20 max-sm:w-[90%]">
                <div className="title w-full flex justify-between items-center">
                    <h1 className='text-xl'>WishList({wishlistproducts.length})</h1>
                    <Button className='w-[223px] h-[56px] border border-gray-400 font-semibold max-sm:w-[120px] max-sm:h-[40px] max-sm:p-4' variant={"secondary"}>Move All To Bag</Button>
                </div>
                {isLoading ? <div className="items w-full mt-10 flex flex-wrap justify-between max-sm:justify-center">
                    <Card className="overflow-hidden w-[350px] h-[500px] mt-10 bg-gray-400 animate-pulse duration-1000">

                    </Card>
                    <Card className="overflow-hidden w-[350px] h-[500px] mt-10 bg-gray-400 animate-pulse duration-1000">

                    </Card>
                    <Card className="overflow-hidden w-[350px] h-[500px] mt-10 bg-gray-400 animate-pulse duration-1000">

                    </Card>
                    <Card className="overflow-hidden w-[350px] h-[500px] mt-10 bg-gray-400 animate-pulse duration-1000">

                    </Card>
                </div> :
                    <div className="items w-full mt-10 flex flex-wrap  max-sm:justify-center">
                        {
                            wishlistproducts.map((product, index) => {
                                return <ProductCARD key={index} id={product.id} isDiscont={product.isDiscont} title={product.title} price={product.price} description={product.description} image={product.image} rate={product.rating.rate} count={product.rating.count} stock={product.stock} category={product.category} discount={product.discount} />

                            })

                        }
                    </div>}

            </div>
            <div className="section2 w-[79%] pt-10 m-auto pb-20 max-sm:w-[90%]">
                <div className="title w-full flex justify-between items-center">
                    <div className='flex items-center'>
                        <div className="w-5 h-10 bg-mysecondary rounded-md"></div>
                        <h1 className='text-xl pl-4'>Just For You</h1>
                    </div>
                    <Button className='w-[150px] h-[56px] border border-gray-400 font-semibold max-sm:w-[120px] max-sm:h-[40px] max-sm:p-4' variant={"secondary"}>Sell All</Button>
                </div>
                {isLoading ? <div className="items w-full mt-10 flex flex-wrap justify-between max-sm:justify-center">
                    <Card className="overflow-hidden w-[350px] h-[500px] mt-10 bg-gray-400 animate-pulse duration-1000">

                    </Card>
                    <Card className="overflow-hidden w-[350px] h-[500px] mt-10 bg-gray-400 animate-pulse duration-1000">

                    </Card>
                    <Card className="overflow-hidden w-[350px] h-[500px] mt-10 bg-gray-400 animate-pulse duration-1000">

                    </Card>
                    <Card className="overflow-hidden w-[350px] h-[500px] mt-10 bg-gray-400 animate-pulse duration-1000">

                    </Card>
                </div> :
                    <div className="items w-full mt-10 flex flex-wrap  max-sm:justify-center">
                        {
                            products.map((product, index) => {
                                if (index <= 4) {
                                    return <ProductCARD key={index} id={product.id} isDiscont={product.isDiscont} title={product.title} price={product.price} description={product.description} image={product.image} rate={product.rating.rate} count={product.rating.count} stock={product.stock} category={product.category} discount={product.discount} />
                                }

                            })

                        }
                    </div>}

            </div>
        </div>

    )
}

export default WishList