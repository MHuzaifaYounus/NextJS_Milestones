"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/button'

const Header = () => {
  const [isNavBar, setisNavBar] = useState<boolean>(false)
  function menuBtnHandler() {
    setisNavBar(!isNavBar)
  }
  return (
    <div>


      <div className="header w-full border-b-[0.5px] border-gray-500 ">

        <div className="container h-16 w-[79%] m-auto flex justify-between items-center max-lg:min-w-[90%]">
          <h1 className="text-2xl font-bold "><span>S</span>OLO<span>V</span>ERA.</h1>


          <div className="w-[400px] h-[38px] flex justify-between items-center max-sm:w-[120px]">
            <div className="h-full w-[243px] flex justify-evenly bg-[#F5F5F5] py-[7px] pr-[12px] pl-[20px] max-sm:hidden">
              <input type="search" className="w-[90%] h-full bg-transparent text-sm border-none outline-none" placeholder="What are you looking for?" />
              <Image src={"/icons/search.svg"} alt="no icon found" width={24} height={24}></Image>

            </div>
            <Link href={"/wishlist"}><Image src={"/icons/wishlist.svg"} alt="no icon found" width={32} height={32}></Image></Link>
            <Link href={"/cart"}><Image src={"/icons/cart.svg"} alt="no icon found" width={32} height={32}></Image></Link>
            <Image className='xl:hidden' onClick={menuBtnHandler} src={"/icons/menubtn.svg"} alt="no icon found" width={24} height={24}></Image>
          </div>

        </div>

      </div>

      <div className="nav bg-black text-white h-12 w-full flex justify-center items-center max-md:h-24 max-xl:hidden">
        <ul className="flex justify-between items-center w-[33.3%] h-6 ">
          <li className="active hover:text-mysecondary transition-all"><Link href={"/"}>Home</Link></li>
          <li className=' hover:text-mysecondary transition-all'><Link href={"/products"}>Products</Link></li>
          <li className=' hover:text-mysecondary transition-all'><Link href={"/contact"}>Contact</Link></li>
          <Button className='bg-mysecondary text-white hover:text-black' variant={"secondary"} color='black'><Link href={"/signup"}>Sign Up</Link></Button>
        </ul>

      </div>

      <div className={`mobileNav ${isNavBar ? "flex" : "hidden"}  xl:hidden`}>
        <ul className="flex flex-col justify-evenly bg-black text-white w-full items-center h-[300px] ">
          <li className="active"><Link href={"/"}>Home</Link></li>
          <li><Link href={"/products"}>Products</Link></li>
          <li><Link href={"/contact"}>Contact</Link></li>
          <Button className='bg-mysecondary text-white hover:text-black' variant={"secondary"} color='black'><Link href={"/signup"}>Sign Up</Link></Button>


        </ul>
      </div>

    </div>
  )
}

export default Header