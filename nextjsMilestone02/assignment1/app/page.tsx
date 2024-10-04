import Link from "next/link";
export default function Home() {
  return (
    <div className="main">
        <h1 className="title">Welcome to PixelPages</h1>
        <p className="para">Welcome to Pixel Pages! Discover beautifully designed, customizable web templates that make building your online presence easy and enjoyable for everyone. Lets create together!</p>
        <button className="btn"><Link href={"/about/nestedabout"}>Read More</Link></button>
    </div>
  );
}

