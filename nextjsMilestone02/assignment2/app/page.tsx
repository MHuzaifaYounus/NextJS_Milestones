import Button from "@/components/ui/button"
export default function Home() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col bg-no-repeat bg-cover bg-mainImage max-sm-[700]:justify-start max-sm-[700]:pt-[70px]">

      <h1 className="text-6xl font-extrabold text-mainColor max-sm-[700]:pt-12 max-sm-[700]:text-4xl pl-5">Welcome to PixelPages</h1>

      <p className="text-2xl w-1/2 text-center max-sm-[700]:w-[90%] max-sm-[700]:text-lg max-sm-[700]:pl-2 max-sm-[700]:text-start">Welcome to Pixel Pages! Discover beautifully designed, customizable web templates that make building your online presence easy and enjoyable for everyone. Lets create together!</p>

      <Button internalText="Read More" link="/about/nestedabout" />

    </div>
  );
}

