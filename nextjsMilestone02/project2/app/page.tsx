
import { FaGithub, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="h-[91vh]  w-full flex justify-evenly items-center relative overflow-x-hidden max-xl:flex-col-reverse max-xl:h-[1200px] max-md:h-[1000px]">
      <div className="h-[500px]  w-2/5 max-xl:w-[90%] max-[450px]:h-[40%] ">
        <h1 className='text-5xl max-[450px]:text-3xl'>Hi, I am <span>H</span>uzaifa <span>Y</span>ounus</h1>
        <h2 className='pt-3 text-3xl max-[450px]:text-xl'><span>Front End Developer</span></h2>
        <p className='pt-5 text-xl max-[450px]:text-lg'>Hi, I&apos;m Muhammad Huzaifa Younus  a creative web developer with a passion for building dynamic, user-friendly applications.Let&apos;s create something amazing together!</p>
        <div className="w-52 text-3xl flex cursor-pointer mt-8 justify-between max-[450px]:w-[90%]">
          <Link className='transition hover:scale-110 hover:text-primary' href={"https://github.com/MHuzaifaYounus"}> <FaGithub /></Link>
          <Link className='transition hover:scale-110 hover:text-primary' href={"#"}> <FaTwitter /></Link>
          <Link className='transition hover:scale-110 hover:text-primary' href={"https://www.facebook.com/profile.php?id=61556341636932"}> <FaFacebook /></Link>
          <Link className='transition hover:scale-110 hover:text-primary' href={"https://l.facebook.com/l.php?u=https%3A%2F%2Flinkedin.com%2Fin%2Fhuzaifayounus14%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR17fl5VkxFhFDBUOSSirbKx9sgeJOdkcGdT_WSFrWpAnz4_xHP1k7FgBIg_aem_fN6-DrklAlDSJkU38f4png&h=AT1bNTsSgSI7aH5L4jVb2e8efI-z_A1zwC1yeZOcc28yG5ijpIAPmub6TIQNkuYDGcQ80ZxFNKkm6CH0i_9Kj4BK4LBE0XHHz58-Ai3QDicoVvs2xmEmnS3U_m8TldSP4JqH"}>  <FaLinkedin /></Link>
        </div>
        <div className="h-20 w-[300px] flex justify-between items-center mt-8 max-[450px]:mt-3 max-[450px]:w-full">
          <button className='px-8 py-3 border border-primary rounded-xl text-white cursor-pointer transition-all bg-primary hover:bg-transparent'><Link href={"/contact"}>Let&apos;s Talk</Link></button>
          <button className='px-8 py-3 border border-primary rounded-xl text-white cursor-pointer transition-all bg-transparent hover:bg-primary'><Link href={"/static/huzaifacv.pdf"}>Resume</Link></button>
        </div>
      </div>
      <div className=" w-[40%]   mt-[-90px] flex justify-center items-start max-xl:w-[90%] max-xl:pb-10 max-[450px]:pt-10 ">
        <Image className='rounded-full border-4 border-primary 
        ' src={"/static/main.png"} alt='no found' width={500} height={500}></Image>
      </div>
    </div>
  );
}
