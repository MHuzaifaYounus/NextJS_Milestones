import Link from "next/link"
import React from 'react'
import Image from "next/image"
import '../globals.css';

const Projects = () => {
  return (
    <div className="h-[91vh] pt-10">
        <div className="border border-primary w-4/5 rounded-xl m-auto shadow-lg shadow-primary max-[450px]:w-full max-md:pb-10">
            <div className="title">
                <h1><span>MY</span> <span>P</span>ORTFOLIO</h1>
            </div>
            <div className="container">
                <div className="w-[300px] h-[400px] transition-all border border-primary rounded-xl max-[1110px]:mt-5">
                    <div className="h-[50%] w-full overflow-hidden">
                        <Image className="transition rounded-xl hue-rotate-[120deg] hover:scale-110" src={"/static/30days.png"} alt="no found" width={300} height={300}></Image>
                    </div> 
                    <div className="text-left pt-5 h-[55%] m-auto w-[90%] relative">
                        <h2 className="text-lg"><span>30 Projects</span></h2>
                        <p className="mt-5 transition">30 days of 30 projects challenge given by Sir Asharib Ali</p>
                        <button className="absolute bottom-8 left-0 px-5 py-2 border border-primary bg-primary rounded-xl text-white cursor-pointer transition mt-5 hover:bg-transparent"><Link href={"https://30-days-of-projects.vercel.app"}>Read More</Link></button>
                    </div>
                  
                </div>
                <div className="w-[300px] h-[400px] transition-all border border-primary rounded-xl max-[1110px]:mt-5">
                    <div className="h-[50%] w-full overflow-hidden">
                        <Image className="transition rounded-xl hue-rotate-[120deg] hover:scale-110" src={"/static/ts.webp"} alt="no found" width={300} height={300}></Image>
                    </div> 
                    <div className="text-left pt-5 h-[55%] m-auto w-[90%] relative">
                        <h2 className="text-lg"><span>100 Days</span></h2>
                        <p className="mt-5 transition">100 Days of Typescript challenge given by Sir Asharib Ali</p>
                        <button className="absolute bottom-8 left-0 px-5 py-2 border border-primary bg-primary rounded-xl text-white cursor-pointer transition mt-5 hover:bg-transparent"><Link href={"https://github.com/MHuzaifaYounus/100_Days_Coding"}>Read More</Link></button>
                    </div>
                  
                </div>
                <div className="w-[300px] h-[400px] transition-all border border-primary rounded-xl max-[1110px]:mt-5">
                    <div className="h-[50%] w-full overflow-hidden">
                        <Image className="transition rounded-xl hue-rotate-[120deg] hover:scale-110" src={"/static/hackathon.png"} alt="no found" width={300} height={300}></Image>
                    </div> 
                    <div className="text-left pt-5 h-[55%] m-auto w-[90%] relative">
                        <h2 className="text-lg"><span>Hackathon</span></h2>
                        <p className="mt-5 transition">A Resume Builder Hackarhon given by Sir Ameen Alam</p>
                        <button className="absolute bottom-8 left-0 px-5 py-2 border border-primary bg-primary rounded-xl text-white cursor-pointer transition mt-5 hover:bg-transparent"><Link href={"https://huza-resume-maker.vercel.app/Milestone-4-5/index.html"}>Read More</Link></button>
                    </div>
                  
                </div>
             
          
            </div>
        </div>
    </div>
  )
}

export default Projects