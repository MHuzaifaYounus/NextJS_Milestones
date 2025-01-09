"use client"
import React, { useEffect, useState } from 'react'
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
import { CheckoutProducts } from '../global'




const CheckOut = () => {
  const [subTotal, setSubTotal] = useState<number>(0)
  const [isSubmit, setIsSubmit] = useState(false)
  function submitHandler() {
    console.log("Order Placed");
    setIsSubmit(true)
  
    
  }

  useEffect(() => {
    CheckoutProducts.forEach((product) => {
      setSubTotal(prev => prev += (product.totalPrice || 0))
    })


  }, [])

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
      {!isSubmit ?   
      <form
          className="form flex flex-col justify-evenly h-[900px] w-[40%] max-lg:w-[45%] max-md:w-full"
          onSubmit={submitHandler}
        >
          <h1 className="font-medium text-4xl">Billing Details</h1>

          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="firstName" className="text-gray-400 block mb-2" aria-required="true">
              First Name
            </label>
            <Input
              id="firstName"
              name="firstName"
              className="border-none bg-gray-200 p-2 rounded-md w-full"
              type="text"
              required
            />
          </div>

          {/* Company Name */}
          <div className="mb-4">
            <label htmlFor="companyName" className="text-gray-400 block mb-2">
              Company Name
            </label>
            <Input
              id="companyName"
              name="companyName"
              className="border-none bg-gray-200 p-2 rounded-md w-full"
              type="text"
            />
          </div>

          {/* Street Address */}
          <div className="mb-4">
            <label htmlFor="streetAddress" className="text-gray-400 block mb-2" aria-required="true">
              Street Address
            </label>
            <Input
              id="streetAddress"
              name="streetAddress"
              className="border-none bg-gray-200 p-2 rounded-md w-full"
              type="text"
              required
            />
          </div>

          {/* Apartment/Floor */}
          <div className="mb-4">
            <label htmlFor="apartment" className="text-gray-400 block mb-2">
              Apartment, floor, etc. (optional)
            </label>
            <Input
              id="apartment"
              name="apartment"
              className="border-none bg-gray-200 p-2 rounded-md w-full"
              type="text"
            />
          </div>

          {/* Town/City */}
          <div className="mb-4">
            <label htmlFor="town" className="text-gray-400 block mb-2" aria-required="true">
              Town/City
            </label>
            <Input
              id="town"
              name="town"
              className="border-none bg-gray-200 p-2 rounded-md w-full"
              type="text"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="text-gray-400 block mb-2" aria-required="true">
              Phone Number
            </label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              className="border-none bg-gray-200 p-2 rounded-md w-full"
              type="tel"
              pattern="[0-9]{11}"
              required
              placeholder='03312345678'
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-400 block mb-2" aria-required="true">
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              className="border-none bg-gray-200 p-2 rounded-md w-full"
              type="email"
              required
            />
          </div>

          {/* Save Information */}
          <div className="flex items-center mb-6">
            <Input
              id="saveInfo"
              name="saveInfo"
              className="w-[24px] h-6 rounded-sm border-gray-300 outline-none"
              type="checkbox"
            />
            <label htmlFor="saveInfo" className="pl-4">
              Save this information for faster check-out next time
            </label>
          </div>

          {/* Submit Button */}
          <Button type="submit" className='bg-mysecondary h-[56px] w-[211px] font-medium max-sm:w-[100px] max-sm:h-[40px] text-xs'>Place Order</Button>

        </form>: 
        <div  className="flex flex-col justify-evenly items-center h-[900px] w-[40%] max-lg:w-[45%] max-md:w-full bg-gray-300 rounded-3xl">
            <Image src={"/img/shipment.png"} alt='no found' width={200} height={200}></Image>
            <h1 className='text-2xl text-black'>Your Order is in Your Way</h1>
        </div>
        }

        <div className="checkout flex flex-col justify-evenly h-[600px] w-[40%] mt-20 max-lg:w-[45%] max-md:w-full">

          {CheckoutProducts.map((product, index) => {
            return <div key={index} className="flex justify-between items-center w-[90%]">
              <div className="flex items-center">
                <Image src={product.image} alt='no img found' width={54} height={54}></Image>
                <p className='pl-4'>{product.title}</p>
              </div>
              <p>${product.totalPrice}</p>

            </div>
          })}



          <div className="flex h-[30px] justify-between  border-b border-gray-400 w-[90%]">
            <h2>Subtotal</h2>
            <p>${subTotal}</p>
          </div>
          <div className="flex h-[30px] justify-between  border-b border-gray-400 w-[90%]">
            <h2>Shipping</h2>
            <p>Free</p>
          </div>
          <div className="flex h-[30px] justify-between  w-[90%]">
            <h2>Total</h2>
            <p>${subTotal}</p>
          </div>

         {!isSubmit && <div className="flex justify-between  w-full">

            <div className="flex flex-col justify-between w-[40%] h-[100px]">
              <div className="flex items-center">
                <Input className='w-6 h-6' type='radio' name='method' />
                <p className='pl-4'>Bank</p>
              </div>
              <div className="flex items-center">
                <Input className='w-6 h-6' type='radio' name='method' />
                <p className='pl-4'>Cash On Delivery</p>
              </div>
            </div>

            <div className="flex w-[60%] items-start ">
              <Image src={"/icons/banks.svg"} alt='no img found' width={192} height={28}></Image>
            </div>

          </div> }
         {!isSubmit && <div className="couponcode w-full flex justify-between max-sm:w-full max-sm:justify-evenly">
            <Input className='w-[300px] h-[56px] max-sm:w-[200px] max-sm:h-[40px]' placeholder='Coupon Code' />
            <Button className='bg-mysecondary h-[56px] w-[211px] font-medium max-sm:w-[100px] max-sm:h-[40px] text-xs'>Apply Coupon</Button>
          </div>}

        </div>
      </div>
    </div>
  )
}

export default CheckOut