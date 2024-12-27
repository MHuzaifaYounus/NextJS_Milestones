import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const LogIn = () => {
  return (
    <div className='w-full flex justify-between items-center mt-20 mb-20 max-md:flex-col'>
    <div className="img max-lg:w-[50%] max-sm:w-full">
      <Image src={"/img/signup_side.svg"} alt='no img found' width={805} height={781}></Image>
    </div>
    <div className="right w-[50%] flex justify-center max-md:pt-10 max-sm:w-full">
      <div className="form w-[371px] h-[326px] flex flex-col justify-between max-sm:w-90% max-sm:px-4">
        <h1 className='font-medium text-4xl max-sm:text-3xl'>Log In To Exclusive</h1>
        <p>Enter your details below</p>
        <input type="email" className=' border-b border-gray-600 w-[370px] h-[56px] bg-transparent  outline-none max-sm:w-full' placeholder='Email' />
        <input type="password" className='border-b border-gray-600 w-[370px] h-[56px] bg-transparent  outline-none max-sm:w-full' placeholder='Password' />
        <div className=" flex items-center w-[90%] justify-between">
        <Button className='bg-mysecondary h-[46px] w-[143px]'>Log In</Button>
        <Link href={"/"} className='text-mysecondary max-sm:text-sm'>Forget Password?</Link>

        </div>


       
      </div>
    </div>
  </div>
  )
}

export default LogIn