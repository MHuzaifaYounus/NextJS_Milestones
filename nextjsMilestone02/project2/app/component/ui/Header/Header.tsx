"use client"
import Link from "next/link"
import { MenuIcon } from 'lucide-react'
import { useEffect, useState } from "react"
export default function Header() {
    const [isNavbar, setIsNavbar] = useState<boolean>(true)

    function ShowNavBarHandler() {
        setIsNavbar(!isNavbar)
    }
    useEffect(() => {
        if (screen.width <= 850) {
            setIsNavbar(false)
        }
    }, [])

    function hideNav() {
        if(screen.width <= 850){
            setIsNavbar(false)
        }
    }
    return <div className="w-[90%] flex h-20 m-auto max-md:w-[90%]">
        <div className="w-[30%] max-md:w-[70%]">
            <h1 className="text-5xl leading-[80px] max-[450px]:leading-[80px] max-[450px]:text-3xl "><span>H</span>UZAIFA <span>.</span></h1>
        </div>
        <div className="w-[70%] h-full flex justify-end items-center max-md:w-[30%] ">
            <MenuIcon className="hidden w-10 h-10 max-md:block" onClick={ShowNavBarHandler}></MenuIcon>
            {isNavbar && <ul onClick={hideNav} className="w-full h-full flex items-center justify-end max-md:hidden max-md:absolute max-md:top-16 max-md:left-0 max-md:flex-col max-md:justify-evenly max-md:w-full max-md:bg-primary max-md:z-10 max-md:h-72" style={{ display: isNavbar ? "flex" : "none" }}>
                <li className="text-white text-lg transition-all px-8 md:hover:text-primary"><Link href={"/"}>Home</Link></li>
                <li className="text-white text-lg transition-all px-8 md:hover:text-primary"><Link href={"/projects"}>Projects</Link></li>
                <li className="text-white text-lg transition-all px-8 md:hover:text-primary"><Link href={"/about"}>About</Link></li>
                <li className="text-white text-lg transition-all px-8 md:hover:text-primary"><Link href={"/contact"}>Contact</Link></li>
            </ul>
            }
        </div>
    </div>
}