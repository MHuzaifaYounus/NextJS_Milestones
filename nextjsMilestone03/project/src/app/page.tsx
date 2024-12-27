import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import ProductCARD from "@/components/productCard";

export default function Home() {
  return (
    <div>
      <div className="slider w-full min-h-[500px] pb-14 pt-10">
        <div className="container m-auto w-[79%]  flex justify-evenly items-center max-2xl:min-w-full bg-black min-h-[544px] text-white max-lg:w-[350px] max-lg:flex-col  max-sm:w-[80%]">
          <div className="text min-h-[350px] flex flex-col justify-between max-sm:w-full mt-10 max-sm:items-center ">
            <span className="text-3xl ">SOLOVERA .</span>
            <h1 className="text-6xl font-semibold w-[394px] max-sm:text-4xl max-sm:w-[80%] max-sm:text-center">Shop Smart, Live Better</h1>
            <p className="text-2xl text-gray-300 max-sm:w-[90%] max-sm:text-lg max-sm:text-center ">Your One-Stop Destination for Everything You Love!</p>
            <Button className='bg-mysecondary text-white hover:text-black w-[150px] h-[50px]' variant={"secondary"} color='black'>Read More</Button>
          </div>
          <div className="img min-h-[350px] mt-10">
            <Image src={"/img/hero1.png"} alt="no img found" width={500} height={900}></Image>

          </div>

        </div>

      </div>
      <div className="section2 w-[79%] min-h-[600px] border-b-[0.5px] border-gray-500 mb-3 m-auto max-sm:w-[90%]">
        <div className="top text-secondary font-bold flex items-center">
          <div className="w-1 h-14 bg-mysecondary rounded-md"></div>
          <h1 className="text-mysecondary pl-2 text-2xl">Todays</h1>
        </div>
        <div className="title w-full flex justify-between mt-3 max-sm:flex-col max-sm:items-center">
          <h1 className="text-4xl font-semibold max-sm:text-3xl border-b-4 pb-4 border-mysecondary">Winter Sales</h1>
          <div className="text-3xl font-semibold">
            30<span>:</span>54<span>:</span>32
          </div>

        </div>
        <div className="items-box w-full flex justify-between mt-4 flex-wrap max-sm:justify-center">
          {Array.from({ length: 4 }).map((_, index) => (
            <ProductCARD key={index} isDiscont={true} />

          ))}

        </div>

        <div className="w-full flex justify-center">
          <Button className="font-medium bg-mysecondary mt-10 mb-10 h-[56px] w-[234px]">View All Products</Button>

        </div>

      </div>
      <div className="section3 w-[79%] min-h-[430px] border-b-[0.5px] border-gray-500 pb-8 m-auto pt-12 max-sm:w-[90%]">
        <div className="top text-secondary font-bold flex items-center">
          <div className="w-1 h-14 bg-mysecondary rounded-md"></div>
          <h1 className="text-mysecondary pl-2 text-2xl">Features</h1>
        </div>
        <div className="title w-full flex justify-between mt-3">
          <h1 className="text-4xl font-semibold max-sm:text-3xl border-b-4 pb-4 border-mysecondary">Why Our Platform?</h1>
          <div className="text-3xl font-semibold">

          </div>

        </div>
        <div className="items-box w-full flex justify-between mt-12 flex-wrap max-sm:justify-center">
          <Card className="mt-5 ">
            <CardContent className="flex flex-col justify-center items-center w-[170px] h-[145px] pb-0">
              <Image src={"/icons/Category-CellPhone.svg"} alt="no img found" width={56} height={56}></Image>
              <h2 className="font-medium pt-3">Responsive</h2>
            </CardContent>
          </Card>
          <Card className="mt-5 ">
            <CardContent className="flex flex-col justify-center items-center w-[170px] h-[145px] pb-0">
              <Image src={"/icons/Category-Computer.svg"} alt="no img found" width={56} height={56}></Image>
              <h2 className="font-medium pt-3">Management</h2>
            </CardContent>
          </Card>
          <Card className="mt-5 ">
            <CardContent className="flex flex-col justify-center items-center w-[170px] h-[145px] pb-0">
              <Image src={"/icons/Category-SmartWatch.svg"} alt="no img found" width={56} height={56}></Image>
              <h2 className="font-medium pt-3">Quality</h2>
            </CardContent>
          </Card>
          <Card className="mt-5 ">
            <CardContent className="flex flex-col justify-center items-center w-[170px] h-[145px] pb-0">
              <Image src={"/icons/Category-Camera.svg"} alt="no img found" width={56} height={56}></Image>
              <h2 className="font-medium pt-3">Categorized</h2>
            </CardContent>
          </Card>
          <Card className="mt-5 ">
            <CardContent className="flex flex-col justify-center items-center w-[170px] h-[145px] pb-0">
              <Image src={"/icons/Category-Headphone.svg"} alt="no img found" width={56} height={56}></Image>
              <h2 className="font-medium pt-3">Low Budget</h2>
            </CardContent>
          </Card>
          <Card className="mt-5 ">
            <CardContent className="flex flex-col justify-center items-center w-[170px] h-[145px] pb-0">
              <Image src={"/icons/Category-Gamepad.svg"} alt="no img found" width={56} height={56}></Image>
              <h2 className="font-medium pt-3">Controlable</h2>
            </CardContent>
          </Card>



        </div>
      </div>
      <div className="section4 w-[79%] min-h-[600px] pb-8 m-auto pt-12 max-sm:w-[90%]">
        <div className="top text-secondary font-bold flex items-center">
          <div className="w-1 h-14 bg-mysecondary rounded-md"></div>
          <h1 className="text-mysecondary pl-2 text-2xl">This Month</h1>
        </div>
        <div className="title w-full flex justify-between mt-3 max-sm:flex-col max-sm:items-center">
          <h1 className="text-4xl font-semibold max-sm:text-3xl border-b-4 pb-4 border-mysecondary">Best Selling Products</h1>
          <Button className="bg-mysecondary h-[56px] w-[159px] max-sm:w-[110px] max-sm:h-[40px] max-sm:mt-4">View All</Button>

        </div>
        <div className="items-box w-full flex justify-between mt-4 flex-wrap max-sm:justify-center">
          {Array.from({ length: 4 }).map((_, index) => (
            <ProductCARD key={index} isDiscont={false} />

          ))}

        </div>
      </div>
      <div className="click_section w-[79%] max-xl:w-full max-lg:flex-col m-auto mt-20 mb-10 min-h-[500px] flex items-center justify-around bg-black text-white">
        <div className="text  w-[40%] min-h-[500px] flex flex-col pl-20 justify-evenly max-lg:w-full max-lg:h-[400px] max-sm:pl-2 max-sm:items-center">
          <Button className="bg-mytertiary w-[100px] text-black">New Arrival</Button>
          <h1 className="font-semibold text-5xl max-sm:text-3xl max-sm:text-center">Enhance Your Music Experience</h1>
          <p className="text-lg max-sm:text-center">Unleash Pure Sound - Hear Every Beat, Every Detail</p>
          <div className="timer w-[320px] flex justify-between max-sm:w-[90%]">
            <div className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center p-[3px]">
              <div className="h-full w-full rounded-full bg-blue-500"></div>

            </div>
            <div className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center p-[3px]">
              <div className="h-full w-full rounded-full bg-black"></div>

            </div>
            <div className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center p-[3px]">
              <div className="h-full w-full rounded-full bg-red-500"></div>

            </div>
            <div className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center p-[3px]">
              <div className="h-full w-full rounded-full bg-green-500"></div>

            </div>

          </div>
          <Button className="bg-mysecondary h-[56px] w-[171px] font-medium max-sm:h-[50px] max-sm:w-[150px]">Buy Now</Button>
        </div>
        <div className="img   w-[60%] min-h-[500px] flex justify-center items-center max-lg:w-full max-sm:h-[350px] relative">
          <div className="shine absolute w-[80%] h-[80%] blur-3xl rounded-full opacity-45 bg-white"></div>
          <Image src={"/img/headphones.png"} className="z-10" alt="no img fond" width={300} height={220}></Image>
        </div>

      </div>


      <div className="section6 w-[69%] min-h-[600px] mb-3 m-auto pt-12 max-xl:w-[90%]">
        <div className="top text-secondary font-bold flex items-center">
          <div className="w-1 h-14 bg-mysecondary rounded-md"></div>
          <h1 className="text-mysecondary pl-2 text-2xl">Featured</h1>
        </div>
        <div className="title w-full flex justify-between mt-3 max-sm:flex-col max-sm:items-center">
          <h1 className="text-4xl font-semibold max-sm:text-3xl border-b-4 pb-4 border-mysecondary">Shop Like Billiniore</h1>
          <div className="text-3xl font-semibold">
            <Button className=" font-medium border-2 border-mysecondary" variant={"ghost"}>Don't Miss the oportunity</Button>
          </div>

        </div>

        <div className="items-box w-full min-h-[600px] grid grid-cols-4 grid-rows-2 gap-10 mt-12 max-lg:grid-rows-3 max-sm:grid-cols-1 max-sm:grid-rows-4">
          <div className="bg-black col-span-2 row-span-2 flex items-end justify-center relative max-sm:col-span-1 max-sm:row-span-1">
            <div className="absolute left-10 bottom-10 w-[242px] text h-[122px] flex flex-col justify-between items-start text-white">
              <h1 className="text-2xl font-semibold">PlayStation 5</h1>
              <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
              <button className="font-medium underline">Shop Now</button>
            </div>
            <Image src={"/img/frame61.svg"} alt="no img found" width={511} height={511}></Image>
          </div>
          <div className="bg-black relative col-span-2 flex justify-end max-sm:col-span-1 max-sm:row-span-1">
            <div className="absolute left-10 bottom-10 w-[242px] text h-[122px] flex flex-col justify-between items-start text-white">
              <h1 className="text-2xl font-semibold">Womens Collection</h1>
              <p className="text-sm">Featured woman collections that give you another vibe.</p>
              <button className="font-medium underline">Shop Now</button>
            </div>
            <Image src={"/img/frame62.svg"} alt="no img found" width={432} height={266}></Image>
          </div>
          <div className="bg-black relative flex justify-center items-center max-lg:col-span-2 max-sm:col-span-1 max-sm:row-span-1">
            <div className="absolute left-10 max-xl:left-5 bottom-10 w-[242px] text h-[85px] flex flex-col justify-between items-start text-white">
              <h1 className="text-2xl font-semibold">Speakers</h1>
              <p className="text-sm">Amazon wireless speakers</p>
              <button className="font-medium underline">Shop Now</button>
            </div>
            <Image src={"/img/frame63.svg"} alt="no img found" width={210} height={222}></Image>
          </div>
          <div className="bg-black relative flex justify-center items-center max-lg:col-span-4 max-sm:col-span-1 max-sm:row-span-1">
            <div className="absolute left-10 max-xl:left-5 bottom-10 w-[242px] text h-[85px] flex flex-col justify-between items-start text-white">
              <h1 className="text-2xl font-semibold">Perfume</h1>
              <p className="text-sm">GUCCI INTENSE OUD EDP</p>
              <button className="font-medium underline">Shop Now</button>
            </div>
            <Image src={"/img/frame64.svg"} alt="no img found" width={210} height={222}></Image>
          </div>


        </div>
        <div className="w-full flex justify-evenly items-center mt-20 mb-20 flex-wrap ">
          <div className="item w-[249px] h-[161px] flex flex-col justify-between items-center mt-10">
            <div className="w-[80px] h-[80px] rounded-full bg-black border-8 border-gray-400 flex justify-center items-center">
              <Image src={"/icons/Icon-secure.svg"} alt="no icon found" width={40} height={40}></Image>
            </div>
            <h1 className="font-semibold text-xl">24/7 CUSTOMER SERVICE</h1>
            <p className="text-sm">Friendly 24/7 customer support</p>
          </div>
          <div className="item w-[249px] h-[161px] flex flex-col justify-between items-center mt-10">
            <div className="w-[80px] h-[80px] rounded-full bg-black border-8 border-gray-400 flex justify-center items-center">
              <Image src={"/icons/Icon-Customer.svg"} alt="no icon found" width={40} height={40}></Image>
            </div>
            <h1 className="font-semibold text-xl">MONEY BACK GUARANTEE</h1>
            <p className="text-sm">We reurn money within 30 days</p>
          </div>
          <div className="item w-[249px] h-[161px] flex flex-col justify-between items-center mt-10 ">
            <div className="w-[80px] h-[80px] rounded-full bg-black border-8 border-gray-400 flex justify-center items-center">
              <Image src={"/icons/icon-delivery.svg"} alt="no icon found" width={40} height={40}></Image>
            </div>
            <h1 className="font-semibold text-xl">FREE AND FAST DELIVERY</h1>
            <p className="text-sm">Free delivery for all orders over $140</p>
          </div>


        </div>

      </div>



    </div>
  );
}
