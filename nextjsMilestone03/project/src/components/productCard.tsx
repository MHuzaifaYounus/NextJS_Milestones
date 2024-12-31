"use client"
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import Image from 'next/image'
import { Button } from './ui/button'


interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  image: string,
  rate: number,
  count: number,
  category: string,
  stock: number,
  isDiscont: boolean,
  discount?:number,

}

const ProductCARD = (params: Product) => {
  const [isHover, setIsHover] = useState<boolean>(false)
  return (
    <Card className="overflow-hidden w-[270px] mt-10" onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }}>
      <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">
        {params.isDiscont && <Button className="absolute top-2 left-2 bg-mysecondary" size={"sm"}>-{params?.discount}%</Button>}
        <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
          <Image src={"/icons/WishList.svg"} alt="no icon found" width={24} height={24}></Image>
        </Button>
        <Button className={`absolute opacity-0 bottom-[-40px] left-0 w-full h-[41px] rounded-none font-medium transition-all duration-300 ${isHover && "opacity-100 bottom-0"}`}>
          View More
        </Button>

        <Image src={params.image} alt="no img found" width={190} height={180}></Image>
      </CardHeader>
      <CardContent className='flex flex-col justify-between min-h-[220px] pt-10'>
        <h2 className="font-medium">{params.title}</h2>
        <p className="text-mysecondary font-medium">{(params.price - Math.floor(params.price * (params?.discount || 0)) / 100).toFixed(2)} {params.isDiscont && <span className="text-gray-600 line-through">${params.price}</span>}</p>
        <div className="stars w-[140px] flex">
          {Array.from({ length: Number((params.rate)) }).map((_,index) => (
            <Image key={index} src={"/icons/fillstar.svg"} alt='no icon found' height={15} width={15}></Image>

          ))}


          <p className="text-gray-600 text-sm">({params.count})</p>

        </div>
        <div className="flex justify-between items-center w-full font-semibold text-sm">
          <p className=''>Category: <span>{params.category}</span></p>
          <p className=''>Stock: <span>{params.stock}</span></p>

        </div>

      </CardContent>
    </Card>
  )
}

export default ProductCARD