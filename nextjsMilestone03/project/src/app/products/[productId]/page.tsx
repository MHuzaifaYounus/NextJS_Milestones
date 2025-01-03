"use client"
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import ProductCARD from "@/components/productCard";
import { Card } from "@/components/ui/card";
import { CartProducts } from "@/app/global";




const ProductPage = ({ params: { productId } }: { params: { productId: number } }) => {
    const [product, setProduct] = useState<Products | null>(null)
    const [similarProducts, setsimilarProducts] = useState<Products[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false)

    function addtoCart(id: number) {
        if (!CartProducts.find((productid) => productid === id)) {
            CartProducts.push(Number(id))
            setIsAddedToCart(true)
        }
    }

    useEffect(() => {
        async function getProductData() {

            const data: Products[] = await client.fetch(`*[id == ${productId}]{
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
            const category = data[0].category
            const similarData: Products[] = await client.fetch(`*[category == $category && id != ${productId} ]{
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
          `,
                { category })

            setsimilarProducts(similarData)
            setProduct(data[0])
            setIsLoading(false)

        }

        getProductData()

    }, [])
    useEffect(() => {
        CartProducts.forEach((id) => {
            if (id === productId) {
                setIsAddedToCart(true)
            }
        })
    }, [])

    return (
        <div className="">
            {!isLoading ? <div>

                <div className="section1 w-[80%] m-auto py-20 flex justify-between max-xl:w-[95%] max-xl:flex-col items-center">
                    <div className="left grid grid-cols-4 grid-rows-4 gap-2 max-xl:w-full">
                        <div className="col-span-3 row-span-4 max-sm:row-span-3 max-sm:col-span-4 sm-pr-10 ">
                            <Image
                                src={product?.image || ""}
                                alt="user"
                                width={491}
                                height={596}

                            />
                        </div>
                        <div className="">
                            <Image
                                src={product?.image || ""}
                                alt="user"
                                width={132}
                                height={129}

                            />
                        </div>

                        <div className="">
                            <Image
                                src={product?.image || ""}
                                alt="user"
                                width={132}
                                height={129}

                            />
                        </div>
                        <div className="">
                            <Image
                                src={product?.image || ""}
                                alt="user"
                                width={132}
                                height={129}

                            />
                        </div>
                        <div className="">
                            <Image
                                src={product?.image || ""}
                                alt="user"
                                width={132}
                                height={129}

                            />
                        </div>

                    </div>

                    <div className="w-[50%] h-[718px] flex flex-col justify-between max-xl:pt-10 max-xl:w-full">
                        {/* Stock status */}
                        <div className="px-4 py-2">
                            <span className={`${(product?.stock == 0) ? "bg-gray-500" : "bg-mysecondary"} text-white text-xs font-semibold px-2 py-1 rounded-full`}>
                                {(product?.stock == 0) ? "Out of Stock" : "In stock"}
                            </span>
                        </div>

                        {/* Product Title */}
                        <div className="px-4 pb-15 text-black border-b border-gray-400">
                            <h2 className="text-5xl font-bold max-sm:text-2xl">{product?.title}</h2>
                            <p className="text-gray-600 w-[608px] text-lg mt-5 pb-16 max-sm:w-full max-sm:text-sm">
                                {product?.description}
                            </p>
                        </div>

                        {/* Price and Rating */}
                        <div className="px-4 py-2">
                            <div className="flex  flex-col justify-between">
                                <span className="text-3xl font-bold ">${product?.price}</span>
                                <div className="flex items-center pt-4">
                                    {Array.from({ length: Number((product?.rating.rate)) }).map((_, index) => (
                                        <Image key={index} src={"/icons/fillstar.svg"} alt='no icon found' height={15} width={15}></Image>

                                    ))}
                                    <span className="text-gray-600 text-sm">|{product?.rating.rate} rating | {product?.rating.count} Reviews</span>
                                </div>
                            </div>
                        </div>

                        {/* Add to cart */}
                        <div className="px-4 py-4">
                            <div className="flex items-center">
                                <button className={`px-4 py-2 h-[50px] bg-primary_colortext-white text-sm font-medium rounded-md ${isAddedToCart ? "bg-gray-300" : "bg-mysecondary"} text-white`} onClick={() => { addtoCart(productId) }}>
                                    Add to cart
                                </button>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="px-4 py-2">
                            <div className="text-sm text-gray-600 flex flex-wrap flex-col gap-4">
                                <span>Category: <strong className="text-black">{product?.category}</strong></span>
                                <span>Stock: <strong className="text-black">{product?.stock}</strong></span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="section2 w-[80%] m-auto py-20  max-xl:w-[95%] ">
                    {/* Tabs */}
                    <div className="border-b border-gray-300 flex space-x-4 text-sm">
                        <button className="px-4 py-2 font-medium text-primary_color border-b-2 border-orange-500">
                            Description
                        </button>
                    </div>

                    {/* Content */}
                    <div className="mt-4 text-gray-700">
                        <p>
                            {product?.description}
                        </p>
                    </div>

                    {/* Key Benefits */}
                    <div className="mt-6">
                        <h3 className="text-lg font-bold text-gray-800">Key Benefits</h3>
                        <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                            <li>Category: {product?.category}</li>
                            <li>Discount: {(product?.discount) || 0}%</li>
                            <li>Ratings: {product?.rating.rate} </li>
                            <li>Reviews: {product?.rating.count}</li>
                            <li>Best Price</li>
                        </ul>
                    </div>

                    {/* Similar Products */}
                    <div className="mt-10">
                        <h3 className="text-lg font-bold text-gray-800">Similar Products</h3>
                        <div className="grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:items-center gap-4 mt-4 ">
                            {(similarProducts.length === 0) ?
                                <div className="w-full h-[300px] flex justify-center items-center">
                                    <h1 className="text-xl text-gray-400">No Similar Products Found</h1>
                                </div> :
                                similarProducts.map((item, index) => {
                                    return <ProductCARD key={index} id={item.id} isDiscont={item.isDiscont} title={item.title} price={item.price} description={item.description} image={item.image} rate={item.rating.rate} count={item.rating.count} stock={item.stock} category={item.category} discount={item.discount} />
                                })}
                        </div>
                    </div>
                </div>
            </div> :
                (<div>
                    <div className="section1 w-[80%] m-auto py-20 flex justify-between max-xl:w-[95%] max-xl:flex-col items-center">
                        <div className="left grid grid-cols-4 grid-rows-4 gap-2 max-xl:w-full">
                            <div className="bg-gray-300  h-[596px] col-span-3 row-span-4 max-sm:row-span-3 max-sm:col-span-4 sm-pr-10">
                            </div>
                            <div className="bg-gray-300 w-[90%] sm-[130px] h-[129px] ">

                            </div>
                            <div className="bg-gray-300 w-[90%] sm-[130px] h-[129px] ">

                            </div>
                            <div className="bg-gray-300 w-[90%] sm-[130px] h-[129px] ">

                            </div>
                            <div className="bg-gray-300 w-[90%] sm-[130px] h-[129px] ">

                            </div>

                        </div>

                        <div className="w-[50%] h-[718px] flex flex-col justify-between max-xl:pt-10 max-xl:w-full">
                            {/* Stock status */}
                            <div className="px-4 py-2">
                                <span className={`bg-gray-300 w-[10px] h-[5px] text-gray-300 rounded-lg`}>
                                    sold out
                                </span>
                            </div>

                            {/* Product Title */}
                            <div className="px-4 pb-15 text-black border-b border-gray-400">
                                <h2 className="text-5xl font-bold max-sm:text-2xl w-full h-[50px] bg-gray-300 rounded-3xl"></h2>
                                <p className="text-gray-600 w-full text-lg mt-5 pb-16 max-sm:w-full max-sm:text-sm  h-[10px] bg-gray-300 rounded-3xl mb-10">

                                </p>
                            </div>

                            {/* Price and Rating */}
                            <div className="px-4 py-2">
                                <div className="flex  flex-col justify-between">
                                    <span className="text-3xl font-bold w-[90%] h-[30px] rounded-3xl bg-gray-300"></span>
                                    <div className="flex items-center pt-4 w-[90%] h-[10px] rounded-3xl bg-gray-300 mt-10 ">


                                    </div>
                                </div>
                            </div>

                            {/* Add to cart */}
                            <div className="px-4 py-4">
                                <div className="flex items-center">

                                    <button className="ml-4 px-4 py-2 h-[50px] bg-primary_colortext-white text-sm font-medium rounded-md bg-gray-300 text-gray-300 ">
                                        Add to cart
                                    </button>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="px-4 py-2">
                                <div className="text-sm text-gray-600 flex flex-wrap flex-col gap-4 bg-gray-300 w-[100px] h-[30px] rounded-3xl">

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="section2 w-[80%] m-auto py-20  max-xl:w-[95%] ">
                        {/* Tabs */}
                        <div className="border-b border-gray-300 flex space-x-4 text-sm">
                            <button className="px-4 py-2 font-medium text-primary_color border-b-2 border-orange-500 bg-gray-300 text-gray-300 rounded-3xl">
                                Description
                            </button>
                        </div>

                        {/* Content */}
                        <div className="mt-4 text-gray-700">
                            <p className="text-gray-600 w-[608px] text-lg mt-5 pb-16 max-sm:w-full max-sm:text-sm  h-[10px] bg-gray-300 rounded-3xl mb-10">

                            </p>
                        </div>

                        {/* Key Benefits */}
                        <div className="mt-6">

                            <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1 w-[200px] h-[100px] rounded-2xl bg-gray-300">

                            </ul>
                        </div>

                        {/* Similar Products */}
                        <div className="mt-10">

                            <div className="grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:items-center gap-4 mt-4 w-full ">
                                <Card className="overflow-hidden w-[200px] max-md:w-[90%] h-[500px] mt-10 bg-gray-400 animate-pulse duration-1000">

                                </Card>
                                <Card className="overflow-hidden w-[200px] max-md:w-[90%] h-[500px] mt-10 bg-gray-400 animate-pulse duration-1000">

                                </Card>

                            </div>
                        </div>
                    </div>
                </div>)}

        </div>
    )
}

export default ProductPage