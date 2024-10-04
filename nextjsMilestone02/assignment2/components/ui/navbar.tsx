"use client"
import Link from "next/link"
import { Menu } from "lucide-react"
import { useEffect, useState } from "react";
export default function NavBar() {
  const [ShowNavbar, setShowNavbar] = useState<boolean>(true)

  useEffect(() => {
    if (screen.width <= 700) {
      setShowNavbar(false)
    }
  }, [])
  function menuClickHandler() {
    setShowNavbar(!ShowNavbar)

  }
  function navbarhideHandler() {
    if (screen.width <= 700) {
      setShowNavbar(false)
    }
  }
  return (
    <div className="w-full h-4  flex absolute top-0 bg-transparent ">
      <div className="w-[30%] h-full text-4xl p-3 font-extrabold max-sm-[700]:w-[70%] max-[700px]:pt-5"><h1><span>P</span>ixel<span>P</span>ages<span>.</span></h1></div>
      <div className="w-[70%] h-full max-sm-[700]:w-[30%]">
        <Menu className="hidden max-sm-[700]:block w-14 h-14 m-auto mt-5" onClick={menuClickHandler} />
        {ShowNavbar && <ul className="flex justify-end pr-5 text-2xl no-underline max-sm-[700]:w-1/2 max-sm-[700]:absolute max-sm-[700]:flex-col max-sm-[700]:right-10 rounded-xl max-sm-[700]:bg-mainColor max-sm-[700]:border max-sm-[700]:border-mainColor transition-all" onClick={navbarhideHandler}>
          <li className="p-5 transition-all hover:scale-125"><Link href={"/"}>Home</Link></li>
          <li className="p-5 transition-all hover:scale-125"><Link href={"/services"}>Services</Link></li>
          <li className="p-5 transition-all hover:scale-125"><Link href={"/about"}>About</Link></li>
          <li className="p-5 transition-all hover:scale-125"><Link href={"/contact"}>Contact</Link></li>
        </ul>}
      </div>
    </div>
  );
}
