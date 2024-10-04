import Button from "@/components/ui/button";
import Image from "next/image";

export default function AboutPage() {
    return <div className='page-container'>
        <div className="page-title">
            <h1 className="title">About Us</h1>
            <p>Welcome to About us page. There are some words about us</p>
        </div>
        <div className="w-[80%] pt-24 min-h-[75vh] flex flex-wrap max-[1100px]:flex-col max-[1100px]:flex-nowrap">

            <div className="w-1/2 max-[1100px]:w-full">
                <h1 className='text-mainColor text-5xl font-extrabold max-[500px]:text-3xl'>About Pixel Pages</h1>
                <p className='text-2xl text-gray-500 max-[500px]:text-xl'>Welcome to Pixel Pages, your one-stop solution for professional, responsive, and customizable website templates. We believe in empowering businesses and individuals by providing them with high-quality, multi-page templates that not only look great but also function flawlessly across all devices.
                </p>
               <Button link="/about/nestedabout" internalText="More.." />
                
            </div>
            <div className="w-1/2 max-[1100px]:w-full max-[1100px]:mt-2 max-[500px]:pb-20">
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