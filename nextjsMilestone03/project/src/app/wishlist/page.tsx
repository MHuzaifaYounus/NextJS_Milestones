
import React from 'react'
import Image from "next/image";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';



const WishList = () => {
    return (
        <div>
            <div className="section1 w-[79%] pt-10 m-auto pb-20 max-sm:w-[90%]">
                <div className="title w-full flex justify-between items-center">
                    <h1 className='text-xl'>WishList(4)</h1>
                    <Button className='w-[223px] h-[56px] border border-gray-400 font-semibold max-sm:w-[120px] max-sm:h-[40px] max-sm:p-4' variant={"secondary"}>Move All To Bag</Button>
                </div>
                <div className="items w-full mt-10 flex flex-wrap justify-between max-sm:justify-center">
                    <Card className="overflow-hidden w-[270px] mt-10">
                        <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">
                            <Button className="absolute top-2 left-2 bg-mysecondary" size={"sm"}>-30%</Button>
                            <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                                <Image src={"/icons/icon-delete.svg"} alt="no icon found" width={24} height={24}></Image>
                            </Button>
                            <Button className="absolute bottom-0 left-0 w-full h-[41px] rounded-none font-medium ">
                                Add to cart
                            </Button>

                            <Image src={"/img/frame42.svg"} alt="no img found" width={190} height={180}></Image>
                        </CardHeader>
                        <CardContent>
                            <h2 className="font-medium pt-3">Gucci duffle bag</h2>
                            <p className="text-mysecondary font-medium">$960 <span className="text-gray-600 line-through">$1100</span></p>


                        </CardContent>
                    </Card>
                    <Card className="overflow-hidden w-[270px] mt-10">
                        <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">

                            <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                                <Image src={"/icons/icon-delete.svg"} alt="no icon found" width={24} height={24}></Image>
                            </Button>
                            <Button className="absolute bottom-0 left-0 w-full h-[41px] rounded-none font-medium ">
                                Add to cart
                            </Button>

                            <Image src={"/img/frame43.svg"} alt="no img found" width={190} height={180}></Image>
                        </CardHeader>
                        <CardContent>
                            <h2 className="font-medium pt-3">RGB liquid CPU Cooler</h2>
                            <p className="text-mysecondary font-medium">$1260</p>

                        </CardContent>
                    </Card>
                    <Card className="overflow-hidden w-[270px] mt-10">
                        <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">

                            <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                                <Image src={"/icons/icon-delete.svg"} alt="no icon found" width={24} height={24}></Image>
                            </Button>
                            <Button className="absolute bottom-0 left-0 w-full h-[41px] rounded-none font-medium ">
                                Add to cart
                            </Button>

                            <Image src={"/img/frame57.svg"} alt="no img found" width={190} height={180}></Image>
                        </CardHeader>
                        <CardContent>
                            <h2 className="font-medium pt-3">GP11 Shooter USB Gamepad</h2>
                            <p className="text-mysecondary font-medium">$560</p>

                        </CardContent>
                    </Card>
                    <Card className="overflow-hidden w-[270px] mt-10">
                        <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">

                            <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                                <Image src={"/icons/icon-delete.svg"} alt="no icon found" width={24} height={24}></Image>
                            </Button>
                            <Button className="absolute bottom-0 left-0 w-full h-[41px] rounded-none font-medium ">
                                Add to cart
                            </Button>

                            <Image src={"/img/frame58.svg"} alt="no img found" width={190} height={180}></Image>
                        </CardHeader>
                        <CardContent>
                            <h2 className="font-medium pt-3">Quilted Satin Jacket</h2>
                            <p className="text-mysecondary font-medium">$740</p>

                        </CardContent>
                    </Card>
                </div>

            </div>
            <div className="section2 w-[79%] pt-10 m-auto pb-20 max-sm:w-[90%]">
                <div className="title w-full flex justify-between items-center">
                    <div className='flex items-center'>
                        <div className="w-5 h-10 bg-mysecondary rounded-md"></div>
                        <h1 className='text-xl pl-4'>Just For You</h1>
                    </div>
                    <Button className='w-[150px] h-[56px] border border-gray-400 font-semibold max-sm:w-[120px] max-sm:h-[40px] max-sm:p-4' variant={"secondary"}>Sell All</Button>
                </div>
                <div className="items w-full mt-10 flex flex-wrap justify-between max-sm:justify-center">
                    <Card className="overflow-hidden w-[270px] mt-10">
                        <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">
                            <Button className="absolute top-2 left-2 bg-mysecondary" size={"sm"}>-30%</Button>
                            <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
                            </Button>
                            <Button className="absolute bottom-0 left-0 w-full h-[41px] rounded-none font-medium ">
                                Add to cart
                            </Button>

                            <Image src={"/img/frame53.svg"} alt="no img found" width={190} height={180}></Image>
                        </CardHeader>
                        <CardContent>
                            <h2 className="font-medium pt-3">Gucci duffle bag</h2>
                            <p className="text-mysecondary font-medium">$960 <span className="text-gray-600 line-through">$1100</span></p>
                            <div className="stars w-[140px] flex pt-2">
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={18} width={18}></Image>
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={18} width={18}></Image>
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={18} width={18}></Image>
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={18} width={18}></Image>
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={18} width={18}></Image>

                                <p className="text-gray-600">(89)</p>
                            </div>

                        </CardContent>
                    </Card>
                    <Card className="overflow-hidden w-[270px] mt-10">
                        <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">

                            <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
                            </Button>
                            <Button className="absolute bottom-0 left-0 w-full h-[41px] rounded-none font-medium ">
                                Add to cart
                            </Button>

                            <Image src={"/img/frame14.svg"} alt="no img found" width={190} height={180}></Image>
                        </CardHeader>
                        <CardContent>
                            <h2 className="font-medium pt-3">RGB liquid CPU Cooler</h2>
                            <p className="text-mysecondary font-medium">$1260</p>
                            <div className="stars w-[140px] flex pt-2">
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={18} width={18}></Image>
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={18} width={18}></Image>
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={18} width={18}></Image>
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={18} width={18}></Image>
                                <Image src={"/icons/star.svg"} alt='no icon found' height={18} width={18}></Image>

                                <p className="text-gray-600">(89)</p>
                            </div>

                        </CardContent>
                    </Card>
                    <Card className="overflow-hidden w-[270px] mt-10">
                        <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">
                            <Button className="absolute top-2 left-2 bg-mytertiary" size={"sm"}>New</Button>
                            <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
                            </Button>
                            <Button className="absolute bottom-0 left-0 w-full h-[41px] rounded-none font-medium ">
                                Add to cart
                            </Button>

                            <Image src={"/img/frame11.svg"} alt="no img found" width={190} height={180}></Image>
                        </CardHeader>
                        <CardContent>
                            <h2 className="font-medium pt-3">GP11 Shooter USB Gamepad</h2>
                            <p className="text-mysecondary font-medium">$560</p>
                            <div className="stars w-[140px] flex pt-2">
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={18} width={18}></Image>
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={18} width={18}></Image>
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={18} width={18}></Image>
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={18} width={18}></Image>
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={18} width={18}></Image>

                                <p className="text-gray-600">(89)</p>
                            </div>

                        </CardContent>
                    </Card>
                    <Card className="overflow-hidden w-[270px] mt-10">
                        <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">

                            <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
                            </Button>
                            <Button className="absolute bottom-0 left-0 w-full h-[41px] rounded-none font-medium ">
                                Add to cart
                            </Button>

                            <Image src={"/img/frame12.svg"} alt="no img found" width={190} height={180}></Image>
                        </CardHeader>
                        <CardContent>
                            <h2 className="font-medium pt-3">Quilted Satin Jacket</h2>
                            <p className="text-mysecondary font-medium">$740</p>
                            <div className="stars w-[140px] flex pt-2">
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={18} width={18}></Image>
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={18} width={18}></Image>
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={18} width={18}></Image>
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={18} width={18}></Image>
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={18} width={18}></Image>

                                <p className="text-gray-600">(89)</p>
                            </div>

                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>

    )
}

export default WishList