import cssStyle from './about.module.css'
import Image from "next/image";
import Link from 'next/link'

export default function AboutPage() {
    return <div className='page-container'>
        <div className="page-title">
            <h1 className="title">About Us</h1>
            <p>Welcome to About us page. There are some words about us</p>
        </div>
        <div className={cssStyle.about_container}>

            <div className={cssStyle.left_about}>
                <h1>About Pixel Pages</h1>
                <p>Welcome to Pixel Pages, your one-stop solution for professional, responsive, and customizable website templates. We believe in empowering businesses and individuals by providing them with high-quality, multi-page templates that not only look great but also function flawlessly across all devices.
                </p>
               <button className='btn'><Link href={"/about/nestedabout"}>More ...</Link></button>
                
            </div>
            <div className={cssStyle.right_about}>
                <Image
                    src={"/static/aboutimg.png"}
                    width={1200}
                    height={1000}
                    alt='no image'
                />
            </div>
        </div>
    </div>
}