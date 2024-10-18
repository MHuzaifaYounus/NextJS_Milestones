import React from 'react' 
import { FaGithub, FaTwitter, FaFacebook, FaLinkedin, FaPhone, FaMailBulk } from 'react-icons/fa';
import Link from 'next/link';
const Contact = () => {
    return (
        <div className="h-[91vh] pt-10">
            <div className="border border-primary w-4/5 min-h-[800px] rounded-xl m-auto shadow-lg shadow-primary max-[450px]:w-full max-md:pb-10">
                <div className="title">
                    <h1>Let<span>&apos;</span>s Discuss <span>Your</span> Project</h1>
                </div>
                <div className="container max-[1400px]:flex-col">

                    <div className="h-[500px] w-[30%] max-[1400px]:pt-[50px] max-[1400px]:w-[90%]">
                        <h1 className='text-3xl max-[450px]:text-3xl'>Contact <span>Me</span></h1>

                        <div className="h[40px] mt-[50px] flex justify-between items-center w-[350px] max-[450px]:w-[90%]">
                            <div className="h-[50px] w-[50px] border border-primary rounded-full text-2xl text-primary flex justify-center items-center">
                                <FaMailBulk></FaMailBulk>
                            </div>
                            <h2 className='text-xl'>huzaifabuz@gmail.com</h2>
                        </div>
                        <div  className="h[40px] mt-[50px] flex justify-between items-center w-[350px] max-[450px]:w-[90%]">
                            <div className="h-[50px] w-[50px] border border-primary rounded-full text-2xl text-primary flex justify-center items-center">
                                <FaPhone></FaPhone>
                            </div>
                            <h2 className='text-xl'>+923212875227</h2>

                        </div>

                        <div className="w-52 text-3xl flex cursor-pointer mt-[100px] ml-2 justify-between">
                            <Link className='transition hover:text-primary hover:scale-110' href={"https://github.com/MHuzaifaYounus"}> <FaGithub /></Link>
                            <Link className='transition hover:text-primary hover:scale-110' href={"#"}> <FaTwitter /></Link>
                            <Link className='transition hover:text-primary hover:scale-110' href={"https://www.facebook.com/profile.php?id=61556341636932"}> <FaFacebook /></Link>
                            <Link className='transition hover:text-primary hover:scale-110' href={"https://l.facebook.com/l.php?u=https%3A%2F%2Flinkedin.com%2Fin%2Fhuzaifayounus14%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR17fl5VkxFhFDBUOSSirbKx9sgeJOdkcGdT_WSFrWpAnz4_xHP1k7FgBIg_aem_fN6-DrklAlDSJkU38f4png&h=AT1bNTsSgSI7aH5L4jVb2e8efI-z_A1zwC1yeZOcc28yG5ijpIAPmub6TIQNkuYDGcQ80ZxFNKkm6CH0i_9Kj4BK4LBE0XHHz58-Ai3QDicoVvs2xmEmnS3U_m8TldSP4JqH"}>  <FaLinkedin /></Link>
                        </div>
                    </div>

                    <div className="h-[600px] w-1/2 flex flex-col pt-2 max-[1400px]:w-[90%] [&_label]:text-white [&_label]:mt-[50px] [&_label]:block [&_input]:border [&_input]:border-primary [&_input]:h-[50px] [&_input]:w-[90%] [&_input]:m-auto [&_input]:mt-2 [&_input]:outline-none [&_input]:rounded-xl [&_input]:text-white [&_input]:pl-2 [&_input]:max-[450px]:w-full [&_input]:bg-primary/50">

                        <label >Name:</label>
                        <input type="text" id="name" name="name" required placeholder='Enter your name'></input>
                        <label>Email:</label>
                        <input type="email" id="email" name="email" required placeholder='Enter your email'></input>
                        <label >Message:</label>
                        <textarea className='max-[450px]:w-full border border-primary h-[140px] w-[90%] m-auto mt-2 outline-none rounded-xl text-white p-2 bg-primary/50' id="message" name="message" required placeholder='Enter your message'></textarea>
                        <input className="w-[90%] py-2 px-0 outline-none text-xl text-white mt-2 rounded-2xl transition cursor-pointer bg-primary hover:bg-transparent " type="submit" value="Send Message"></input>



                    </div>

                </div>
            </div>
        </div>
    )
}
export default Contact