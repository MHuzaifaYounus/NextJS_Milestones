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
    if(screen.width <= 700){
      setShowNavbar(false)
    }
  }
  return (
    <div className="header">
      <div className="logo"><h1><span>P</span>ixel<span>P</span>ages<span>.</span></h1></div>
      <div className="nav">
        <Menu className="menuIcon" onClick={menuClickHandler} />
        {ShowNavbar && <ul onClick={navbarhideHandler}>
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/services"}>Services</Link></li>
          <li><Link href={"/about"}>About</Link></li>
          <li><Link href={"/contact"}>Contact</Link></li>
        </ul>}
      </div>
    </div>
  );
}
