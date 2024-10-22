import Image from "next/image";
import { MessageCircle, ThumbsUp } from "lucide-react";
import {posts} from "./data"
import Link from "next/link";
export default function Home() {
 

  return (
    <div className="w-full ">
     
      <div className="h-[600px] bg-cover bg-no-repeat  w-full bg-gray-900 flex items-center max-sm:justify-center bg-[url('/static/3.jpg')]" >
        <h1 className="text-7xl max-sm:text-4xl text-white  font-black sm:pl-32 ">Trending Blogs</h1>
      </div>

      <div className="w-[80%]  m-auto max-sm:mt-10 mt-24 pb-12 flex flex-col items-center max-sm:w-full" >
        {posts.map((post, index) => {
          return <div key={index} className="w-[90%] relative  min-h-64 pb-3 rounded-xl border-2 border-cyan-500 mt-12 flex justify-around items-center max-lg:flex-col max-sm:w-[90%] ">
            <div className=" h-[200px] w-[230px] bg-transparent hexagonFull max-lg:mt-10 p-2 flex justify-center items-center">
              <Image className=" hexagonFull" src={post.image} alt="no image" width={210} height={100}></Image>
            </div>
            <div className="h-full w-[60%] max-md:w-[90%] ">
              <h2 className="pt-6 font-bold text-cyan-500">Top # {post.id}</h2>
              <h1 className="font-bold pt-1 text-2xl">{post.title}</h1>
              <p className="mt-5">{post.description}</p>
              <div className="flex pt-2  w-[110px] font-bold justify-around">{post.comments} <MessageCircle className="w-5 h-5"></MessageCircle> {post.likes} <ThumbsUp className="w-5 h-5"></ThumbsUp></div>
              <h2 className="mt-3">⭐⭐⭐⭐⭐</h2>
            </div>
            <button className="absolute bottom-2 right-10 px-4 py-2 font-semibold bg-cyan-500 rounded-xl border-2 border-cyan-500 text-white hover:bg-transparent hover:text-black transition-all max-sm:right-5"><Link href={`/post/${index}`}>Read More</Link></button>

          </div>
        })}


      </div>

    </div>

  )
}
