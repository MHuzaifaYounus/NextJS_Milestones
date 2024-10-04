import Link from "next/link"
export default function NavBar() {
  return (
    <div className="header">
      <div className="logo"><h1><span>P</span>ixel<span>P</span>ages<span>.</span></h1></div>
      <div className="nav">
        <ul>
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/services"}>Services</Link></li>
          <li><Link href={"/about"}>About</Link></li>
          <li><Link href={"/contact"}>Contact us</Link></li>
        </ul>
      </div>
    </div>
  );
}
