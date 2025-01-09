import { Button } from '@/components/ui/button'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const BlogsPage = async () => {


    const blogs: Blog[] = await client.fetch(`*[_type == 'post']{
  author,
    _updatedAt,
    title,
    "slug":slug.current,
    categories,
    content,
  
  "imageUrl":mainImage.asset->url
}`)


    console.log(blogs)
    return (
        <div className="">
            <div className='w-full h-[500px] flex items-center blogs_bg justify-center'>
                <h1 className='sm:text-7xl text-5xl font-extrabold text-white '>Blogs</h1>
            </div>
            <div className="w-full h-[100px] relative top-[-100px] bottom_brush">
            </div>
            <div className="blogs w-[90%] lg:w-[60%] sm:pt-10 pb-20 flex flex-col items-center m-auto ">
                {blogs.map((blog, index) => {
                    return <div key={index} className="w-full  mt-4 sm:mt-10">
                        <div className="img w-full">
                            <Image
                                src={blog.imageUrl}
                                alt='no icon found'
                                width={1300}
                                height={300}
                                className=''
                            />
                        </div>
                        <div className="text pt-5">
                            <div className="flex opacity-55">
                                <div className="flex  items-center ">
                                    <Image
                                        src={"/icons/calender.svg"}
                                        alt='no icon found'
                                        width={34}
                                        height={34}
                                        className=''
                                    />
                                    <p className={`sm:pl-4 pl-2 text-sm sm:text-lg`}>{blog._updatedAt.split("T")[0]}</p>
                                </div>
                                <div className="flex sm:pl-10 pl-5 items-center ">
                                    <Image
                                        src={"/icons/author.svg"}
                                        alt='no icon found'
                                        width={34}
                                        height={34}
                                        className=''
                                    />
                                    <p className={`sm:pl-4 pl-2 text-sm sm:text-lg`}>{blog.author}</p>
                                </div>
                            </div>
                            <h1 className='sm:text-5xl text-2xl font-extrabold pt-3'>{blog.title}</h1>
                            <p className='sm:text-xl text-sm pt-4 text-gray-400'>{blog.content.split("", 250)}...</p>
                            <div className="mt-5">
                                <Button className=''><Link href={`/blogs/${blog.slug}`}>Read More</Link></Button>
                            </div>
                        </div>

                    </div>
                })}
            </div>
        </div>
    )
}

export default BlogsPage