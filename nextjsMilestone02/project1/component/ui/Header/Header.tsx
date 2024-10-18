"use client"
import Link from "next/link"
import style from './header.module.css'
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
    return <div className={style.header}>
        <div className={`${style.logo} `}>
            <h1><span>H</span>UZAIFA <span>.</span></h1>
        </div>
        <div className={`${style.navbar} `}>
            <MenuIcon className={style.menuicon} onClick={ShowNavBarHandler}></MenuIcon>
            {isNavbar && <ul className="innerNav" style={{display:isNavbar ? "flex" : "none"}}>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/projects"}>Projects</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><Link href={"/contact"}>Contact</Link></li>
            </ul>
            }
        </div>
    </div>
}