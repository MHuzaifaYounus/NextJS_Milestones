import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const SignUp = () => {
  return (
    <div className='w-[80%] max-sm:w-full max-lg:pb-4  m-auto border-2 border-mysecondary rounded-3xl overflow-hidden flex justify-between items-center mt-20 mb-20 max-lg:flex-col'>
      <div className="img w-[50%] max-sm:w-full">
        <Image src={"/img/signup_side.png"} alt='no img found' width={800} height={781}></Image>
      </div>
      <div className="right w-[50%] flex justify-center max-md:pt-10 max-sm:w-full  max-lg:pt-4">
        <div className="form w-[371px] h-[530px] flex flex-col justify-between max-sm:w-90% max-sm:px-4">
          <h1 className='font-medium text-4xl max-sm:text-3xl'>Create an account</h1>
          <p>Enter your details below</p>
          <input type="text" className='border-b border-gray-600 w-[370px] h-[56px] bg-transparent  outline-none max-sm:w-full' placeholder='Name' />
          <input type="email" className=' border-b border-gray-600 w-[370px] h-[56px] bg-transparent  outline-none max-sm:w-full' placeholder='Email' />
          <input type="password" className='border-b border-gray-600 w-[370px] h-[56px] bg-transparent  outline-none max-sm:w-full' placeholder='Password' />
          <Button className='bg-mysecondary h-[56px]'>Create Account</Button>

          <Button className=' h-[56px]' variant={"secondary"}>
            <Image src={"/icons/google.svg"} alt='no img found' width={24} height={24}></Image>
            Sign Up with google
          </Button>
          <p className='w-full text-center'>Already have account? <span className='underline'><Link href={"/login"}>Log In</Link></span></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp