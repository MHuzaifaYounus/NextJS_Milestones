import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <div className="w-full h-[800px] sm:h-[965px] bg-gray-300 hero_bg flex justify-center items-center">
        <div className="container lg:w-[60%] w-full sm:pt-20 min-h-[500px] flex flex-col items-center text-white" >
          <div className="w-[80%]  sm:h-[30px] h-[80px] flex justify-evenly text-xl max-sm:flex-col  max-sm:items-center">
            <p>Read. Learn. Explore.</p>
            <p>Latest Trends & Timeless Wisdom</p>
          </div>
          <h1 className="sm:text-7xl text-4xl max-sm:pt-4 font-extrabold text-center">Insights and Ideas, All in One Place!</h1>
          <p className="sm:text-4xl text-2xl sm:pt-10 pt-5 sm:w-[70%] w-[90%] text-center font-light">Explore a world of ideas, insights, and inspiration with blogs crafted to inform, engage, and inspire your journey</p>
          <Button className="bg-primary sm:w-[200px] w-[150px] sm:py-8 py-6 px-10 text-xl mt-10 text-white"><Link href={"/about"}>Read More</Link></Button>
        </div>

      </div>
      <div className="w-full h-[100px] relative top-[-100px] bottom_brush">

      </div>
    </div>
  );
}
