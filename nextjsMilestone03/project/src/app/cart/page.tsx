import React from 'react'
import { Slash } from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'






const Cart = () => {
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
                        <BreadcrumbLink href="/cart" className='text-black'>Cart</BreadcrumbLink>
                    </BreadcrumbItem>

                </BreadcrumbList>
            </Breadcrumb>
            <Table className='mt-20 mb-10 max-sm:text-xs '>
                <TableHeader className='h-[72px] rounded-sm box_shadow'>
                    <TableRow className='border-none outline-none '>
                        <TableHead className='pl-4  '>Product</TableHead>
                        <TableHead className='pl-4 '>Price</TableHead>
                        <TableHead className='pl-4 '>Quantity</TableHead>
                        <TableHead className='pl-4 '>Subtotal</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody >
                    <TableRow className='h-[72px] rounded-sm box_shadow font-medium' >
                        <TableCell className='pl-4'>
                            <div className="flex items-center">
                                <Image src={"/img/frame14.svg"} alt='no img found' width={32} height={32}></Image>
                                <h2 className='pl-4'>LCD Monitor</h2>
                            </div>
                        </TableCell>
                        <TableCell className='pl-4'>$650</TableCell>
                        <TableCell className='pl-4'>
                            <Input className='w-[74px] h-[44px] max-sm:w-[40px] max-sm:h-[30px] max-sm:text-xs' value={"01"} type='number'/>
                        </TableCell>
                        <TableCell className='pl-4'>$650</TableCell>
                    </TableRow>
                    <TableRow className='h-[72px] rounded-sm box_shadow font-medium' >
                        <TableCell className='pl-4'>
                            <div className="flex items-center">
                                <Image src={"/img/frame11.svg"} alt='no img found' width={32} height={32}></Image>
                                <h2 className='pl-4'>H1 GamePad</h2>
                            </div>
                        </TableCell>
                        <TableCell className='pl-4'>$550</TableCell>
                        <TableCell className='pl-4'>
                            <Input className='w-[74px] h-[44px] max-sm:w-[40px] max-sm:h-[30px] max-sm:text-xs' value={"02"} type='number'/>
                        </TableCell>
                        <TableCell className='pl-4'>$1150</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <div className="flex w-full justify-between">
                <Button className='bg-white border border-black font-medium px-12 py-4 h-[56px] max-sm:h-[40px] max-sm:px-4' variant={"secondary"}> <Link href='/'>Return to shop</Link> </Button>
                <Button className='bg-white border border-black font-medium px-12 py-4 h-[56px] max-sm:h-[40px] max-sm:px-4' variant={"secondary"}>Update Cart</Button>

            </div>
            <div className="flex justify-between w-full mt-20 pb-20 max-lg:flex-col max-lg:items-center">
                <div className="left w-[527px] flex justify-between max-sm:w-full max-sm:justify-evenly">
                    <Input className='w-[300px] h-[56px] max-sm:w-[200px] max-sm:h-[40px]' placeholder='Coupon Code'/>
                    <Button className='bg-mysecondary h-[56px] w-[211px] font-medium max-sm:w-[100px] max-sm:h-[40px] text-xs'>Apply Coupon</Button>
                </div>
                <div className="right w-[470px] h-[324px] rounded-sm border border-black p-7 flex flex-col justify-evenly items-center max-lg:mt-10 max-sm:w-full ">
                    <h1 className='font-medium text-xl text-start w-full'>Cart Total</h1>
                    <div className="flex h-[30px] justify-between w-full border-b border-gray-400">
                        <h2>Subtotal</h2>
                        <p>$1170</p>
                    </div>
                    <div className="flex h-[30px] justify-between w-full border-b border-gray-400">
                        <h2>Shipping</h2>
                        <p>Free</p>
                    </div>
                    <div className="flex h-[30px] justify-between w-full">
                        <h2>Total</h2>
                        <p>$1170</p>
                    </div>
                    <Button className='bg-mysecondary h-[56px] px-4 w-[260px] font-medium '><Link href={"/checkout"}>Procees to checkout</Link></Button>
                </div>
            </div>
        </div>
    )
}




export default Cart