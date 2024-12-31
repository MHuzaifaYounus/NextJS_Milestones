import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="slider w-full min-h-[300px]  pt-10">
                <div className="container m-auto w-[79%]  flex justify-evenly items-center max-2xl:min-w-full bg-black text-white max-lg:w-[350px] max-lg:flex-col  max-sm:w-[80%]">
                    <div className="text min-h-[300px] flex flex-col justify-between max-sm:w-full mt-10 max-sm:items-center mb-10">
                        <span className="text-3xl ">SOLOVERA .</span>
                        <h1 className="text-6xl font-semibold w-[394px] max-sm:text-4xl max-sm:w-[80%] max-sm:text-center">Get In Touch</h1>
                        <p className="text-2xl text-gray-300 max-sm:w-[90%] max-sm:text-lg max-sm:text-center ">Were Here to Make Your Shopping Experience Effortless</p>
                        <Button className='bg-mysecondary text-white hover:text-black w-[150px] h-[50px]' variant={"secondary"} color='black'>Contact us</Button>
                    </div>
                    <div className="img min-h-[350px] mt-10">
                        <Image src={"/img/map.png"} alt="no img found" width={500} height={500}></Image>

                    </div>

                </div>

            </div>
            <div className="section md:w-[70%] w-full min-h-[600px] bg-white shadow-lg m-auto mt-[-30px] mb-20 flex flex-col xl:flex-row">
                <div className="form w-full xl:w-[60%]">
                    <div className="py-8 lg:py-16 px-4 mx-auto w-[90%]">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us
                        </h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical
                            issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                        <form action="#" className="space-y-8">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                                    email</label>
                                <input type="email" id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="name@flowbite.com" required></input>
                            </div>
                            <div>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                <input type="text" id="subject"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="Let us know how we can help you" required></input>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                                    message</label>
                                <textarea id="message"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Leave a comment..."></textarea>
                            </div>
                            <Button type="submit"
                                className="h-[40px] bg-mysecondary">Send
                                message</Button>
                        </form>
                    </div>
                </div>
                <div className="side w-full xl:w-[40%] bg-mysecondary h-[700px] flex flex-col justify-evenly items-center">
                    <div className="w-full h-[200px] px-10  flex justify-evenly text-white items-center flex-col">
                        <div className="w-16 h-16 shadow-xl rounded-md bg-red-500 flex justify-center items-center">
                            <div className="w-12 h-12 rounded-md border flex justify-center items-center">
                                <Image src={"/icons/phone.svg"} className='invert' alt='no icon found' width={30} height={30}></Image>

                            </div>
                        </div>
                        <h1 className='text-xl font-bold'>Phone</h1>
                        <p>+92837464393</p>

                    </div>
                    <div className="w-full h-[200px] px-10  flex justify-evenly text-white items-center flex-col">
                        <div className="w-16 h-16 shadow-xl rounded-md bg-red-500 flex justify-center items-center">
                            <div className="w-12 h-12 rounded-md border flex justify-center items-center">
                            <Image src={"/icons/address.svg"} className='invert' alt='no icon found' width={30} height={30}></Image>


                            </div>
                        </div>
                        <h1 className='text-xl font-bold'>Address</h1>
                        <p className='text-center'>123 E-Commerce Street, Shopville, EC 56789</p>

                    </div>
                    <div className="w-full h-[200px] px-10  flex justify-evenly text-white items-center flex-col">
                        <div className="w-16 h-16 shadow-xl rounded-md bg-red-500 flex justify-center items-center">
                            <div className="w-12 h-12 rounded-md border flex justify-center items-center">
                            <Image src={"/icons/company.svg"} className='invert' alt='no icon found' width={30} height={30}></Image>

                            </div>
                        </div>
                        <h1 className='text-xl font-bold'>Company Info:</h1>
                        <p>Name: SOLO(one) VERA(truth) </p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact