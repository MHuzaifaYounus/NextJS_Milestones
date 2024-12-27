import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"
import { Button } from '@/components/ui/button'



const NotFound = () => {
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
            <BreadcrumbLink href="/" className='text-black'>404 Error</BreadcrumbLink>
          </BreadcrumbItem>

        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-full flex flex-col h-[500px] max-sm:h-[300px] justify-evenly text-center items-center">
        <h1 className='text-8xl font-medium max-sm:text-3xl max-sm:font-bold'>404 Not Found</h1>
        <p className='max-sm:text-xs'>Your visited page not found. You may go home page.</p>
        <Button className='bg-mysecondary font-medium h-[56px] w-[245px] px-12'>Back to home page</Button>
      </div>
    </div>
  )
}

export default NotFound