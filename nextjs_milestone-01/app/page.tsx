import {Protest_Guerrilla} from "next/font/google"
const font = Protest_Guerrilla({weight:"400" , subsets:['latin']})

export default function Home() {
  return (
    <div className={`h-96 w-1/2  shadow-xl shadow-green-600 flex justify-center items-center  rounded-3xl m-auto mt-52`}>
      <h1 className={`text-white ${font.className} text-9xl hover:text-green-500 transition  font-sans animate-pulse`}>Hello World</h1>
    </div>
  );
}
