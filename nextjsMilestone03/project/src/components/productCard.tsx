"use client"
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
import Image from 'next/image'
import { Button } from './ui/button'
const ProductCARD = ({isDiscont}:{isDiscont:boolean}) => {
    const [isHover, setIsHover] = useState<boolean>(false)
  return (
    <Card  className="overflow-hidden w-[270px] mt-10" onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }}>
    <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">
      {isDiscont && <Button className="absolute top-2 left-2 bg-mysecondary" size={"sm"}>-40%</Button>}
      <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
        <Image src={"/icons/WishList.svg"}alt="no icon found" width={24} height={24}></Image>
      </Button>
      <Button className={`absolute opacity-0 bottom-[-40px] left-0 w-full h-[41px] rounded-none font-medium transition-all duration-300 ${isHover && "opacity-100 bottom-0"}`}>
        View More
      </Button>

      <Image src={"/img/frame11.svg"} alt="no img found" width={190} height={180}></Image>
    </CardHeader>
    <CardContent className='flex flex-col justify-between min-h-[150px] pt-4'>
      <h2 className="font-medium">HAVIT HV-G92 Gamepad</h2>
      <p className="text-mysecondary font-medium">$120 <span className="text-gray-600 line-through">$190</span></p>
      <div className="stars w-[140px] flex">
        <Image src={"/icons/fillstar.svg"} alt='no icon found' height={15} width={15}></Image>
        <Image src={"/icons/fillstar.svg"} alt='no icon found' height={15} width={15}></Image>
        <Image src={"/icons/fillstar.svg"} alt='no icon found' height={15} width={15}></Image>
        <Image src={"/icons/fillstar.svg"} alt='no icon found' height={15} width={15}></Image>
        <Image src={"/icons/fillstar.svg"} alt='no icon found' height={15} width={15}></Image>

        <p className="text-gray-600 text-sm">(89)</p>
        
      </div>
      <div className="flex justify-between items-center w-full font-semibold text-sm">
      <p className=''>Category: <span>Gaming</span></p>
      <p className=''>Stock: <span>10</span></p>

      </div>

    </CardContent>
  </Card>
  )
}

export default ProductCARD