"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Input } from './ui/input'
import Image from 'next/image'



const Header = () => {
    const [isNavBar, setisNavBar] = useState<boolean>(false)
    function menuBtnHandler() {
        setisNavBar(!isNavBar)
    }
    return (
        <div className="">

            <div className='lg:w-[90%] w-full lg:h-[120px] h-[70px] bg-transparent border-y-2 lg:text-white border-white absolute lg:top-10 top-0 left-[50%] translate-x-[-50%] flex justify-between max-lg:bg-white'>
                <div className="logo lg:w-[20%] sm:w-[40%] w-[50%] h-full flex items-center pr-5">
                    <h1 className={`sm:text-2xl font-bold  text-xl pl-5`}>BLOGSPOT</h1>
                </div>
                <div className="Nav w-[60%]  max-lg:hidden">
                    <ul className='w-full h-full flex justify-around items-center font-semibold text-xl '>
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/blogs"}>Blogs</Link></li>
                        <li><Link href={"/"}>
                            <Image
                                src={"/img/logo.png"}
                                alt='no icon found'
                                width={200}
                                height={200}
                                className=''
                            />
                        </Link></li>
                        <li><Link href={"/about"}>About</Link></li>
                        <li><Link href={"/contact"}>Contact</Link></li>
                    </ul>
                </div>
                <div className="icons lg:w-[20%]  sm:w-[40%] w-[50%] flex justify-end sm:justify-evenly items-center">
                    <Input type='search' placeholder='Search' className='outline-none max-sm:hidden text-sm lg:w-[300px] w-[200px] bg-transparent placeholder:lg:text-white' />
                    <Image
                        src={"/icons/search.svg"}
                        alt='no icon found'
                        width={34}
                        height={34}
                        className='lg:invert mr-5'
                    />
                    <Image
                        src={"/icons/menubtn.svg"}
                        alt='no icon found'
                        width={34}
                        height={34}
                        onClick={menuBtnHandler}
                        className='lg:invert mr-5 lg:hidden'
                    />

                </div>



            </div>

            <div className={`mobileNav ${isNavBar ? "flex" : "hidden"}  lg:hidden absolute top-[70px] left-0 w-full `}>
                <ul className="flex flex-col justify-evenly bg-black text-white w-full items-center h-[300px] ">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/blogs"}>Blogs</Link></li>
                    <li><Link href={"/about"}>About</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>

                </ul>
            </div>
        </div>
    )
}

export default Header