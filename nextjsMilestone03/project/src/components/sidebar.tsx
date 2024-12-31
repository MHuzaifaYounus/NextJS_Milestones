"use client"
import Image from "next/image";
import { useState } from "react";


const Sidebar = () => {
    const [isSideBar, setIsSideBar] = useState<boolean>(false)
    function sidebarHandler() {
        setIsSideBar(!isSideBar)
    }

    const categories = ["men's clothing", "jewelery", "electronics", "women's clothing"]
    return (
        <div className={`shadow-xl w-[270px] p-4 border bg-white border-gray-200 max-xl:z-10 max-xl:absolute ${isSideBar ?"max-xl:left-[0]" : "max-xl:left-[-270px]"} max-xl:top-10  relative transition-all `}>
            <div className="xl:hidden absolute top-0 right-[-40px] w-[40px] h-[40px] rounded-lg rounded-s-none bg-white border border-black flex justify-center items-center" onClick={sidebarHandler}><Image src={"/icons/sidebarbtn.svg"} alt="no icon found" width={24} height={24}/></div>
            <div className="search mb-10 w-[90%] flex justify-evenly bg-[#F5F5F5] py-[7px] pr-[12px] pl-[20px] ">
                <input type="search" className="w-[90%] h-full bg-transparent text-sm border-none outline-none" placeholder="Search For Products" />
                <Image src={"/icons/search.svg"} alt="no icon found" width={24} height={24}></Image>

            </div>

            {/* Categories */}

            <h3 className="text-lg font-semibold  mb-2">Category</h3>
            <div className="">
                {categories.map((category, index) => (
                    <div key={index} className="flex items-center mt-2">
                        <input type="checkbox" />
                        <p className="pl-2">{category}</p>
                    </div>
                ))}
            </div>



            {/* Filter by Price */}

            <h3 className="font-bold text-xl mb-2 pt-10">Filter By Price</h3>
            <div>
                <input
                    type="range"
                    className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 ">
                    <p>From $0</p>
                    <p>To $400</p>
                </div>
            </div>

            {/* Product Tags */}
            <div>
                <h3 className="font-semibold text-lg mb-2 mt-10">Product Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {categories.map((category,index) => (
                            <p
                                key={index}
                                className="px-2 py-1 bg-gray-100 text-sm rounded hover:bg-gray-200 cursor-pointer"
                            >
                                {category}
                            </p>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
