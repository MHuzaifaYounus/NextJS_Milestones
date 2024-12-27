import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Slash } from 'lucide-react'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { Button } from '@/components/ui/button'



const CheckOut = () => {
  return (
    <div className='pt-20 w-[79%] m-auto max-xl:w-[90%] max-sm:w-[95%]'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/cart" className='text-black'>Checkout</BreadcrumbLink>
          </BreadcrumbItem>

        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex justify-between w-full mt-10 pb-20 max-md:flex-col max-md:items-center">
        <div className="form flex flex-col justify-evenly h-[900px] w-[40%] max-lg:w-[45%] max-md:w-full">
          <h1 className='font-medium text-4xl'>Billing Details</h1>
          <div className="">
            <label className='text-gray-400'>First Name</label>
            <Input className='border-none bg-gray-200' />
          </div>
          <div className="">
            <label className='text-gray-400'>Company Name</label>
            <Input className='border-none bg-gray-200' />
          </div>
          <div className="">
            <label className='text-gray-400'>Street Address</label>
            <Input className='border-none bg-gray-200' />
          </div>
          <div className="">
            <label className='text-gray-400'>Apartment, floor, etc. (optional)</label>
            <Input className='border-none bg-gray-200' />
          </div>
          <div className="">
            <label className='text-gray-400'>Town/City*</label>
            <Input className='border-none bg-gray-200' />
          </div>
          <div className="">
            <label className='text-gray-400'>Phone Number*</label>
            <Input className='border-none bg-gray-200' />
          </div>
          <div className="">
            <label className='text-gray-400'>Email Address*</label>
            <Input className='border-none bg-gray-200' />
          </div>
          <div className=" flex ">
            <Input className='w-[24px] h-6 rounded-sm border-gray-300 outline-none ' type='checkbox' />
            <p className='pl-4'>Save this information for faster check-out next time</p>
          </div>

        </div>
        <div className="checkout flex flex-col justify-evenly h-[600px] w-[40%] mt-20 max-lg:w-[45%] max-md:w-full">
          <div className="flex justify-between items-center w-[90%]">
            <div className="flex items-center">
              <Image src={"/img/frame11.svg"} alt='no img found' width={54} height={54}></Image>
              <p className='pl-4'>H1 GamePad</p>
            </div>
            <p>$650</p>

          </div>
          <div className="flex justify-between items-center w-[90%]">
            <div className="flex items-center">
              <Image src={"/img/frame14.svg"} alt='no img found' width={54} height={54}></Image>
              <p className='pl-4'>LCD Mointer</p>
            </div>
            <p>$650</p>

          </div>
          <div className="flex h-[30px] justify-between  border-b border-gray-400 w-[90%]">
            <h2>Subtotal</h2>
            <p>$1170</p>
          </div>
          <div className="flex h-[30px] justify-between  border-b border-gray-400 w-[90%]">
            <h2>Shipping</h2>
            <p>Free</p>
          </div>
          <div className="flex h-[30px] justify-between  w-[90%]">
            <h2>Total</h2>
            <p>$1170</p>
          </div>
          <div className="flex justify-between items-center w-[90%]">
            <div className="flex items-center">
              <Input className='w-6 h-6' type='radio' />
              <p className='pl-4'>Bank</p>
            </div>
            <Image src={"/icons/banks.svg"} alt='no img found' width={192} height={28}></Image>



          </div>
          <div className="flex justify-between items-center w-[90%]">
            <div className="flex items-center">
              <Input className='w-6 h-6' type='radio' />
              <p className='pl-4'>Cash On Delivery</p>
            </div>




          </div>
          <div className="couponcode w-full flex justify-between max-sm:w-full max-sm:justify-evenly">
            <Input className='w-[300px] h-[56px] max-sm:w-[200px] max-sm:h-[40px]' placeholder='Coupon Code' />
            <Button className='bg-mysecondary h-[56px] w-[211px] font-medium max-sm:w-[100px] max-sm:h-[40px] text-xs'>Apply Coupon</Button>
          </div>
          <Button className='bg-mysecondary h-[56px] w-[211px] font-medium max-sm:w-[100px] max-sm:h-[40px] text-xs'>Place Order</Button>
          
        </div>
      </div>
    </div>
  )
}

export default CheckOut