"use client"
import { Button } from '@/components/ui/button'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import React, { ChangeEvent, useEffect, useState } from 'react'


const BlogDetails = ({ params: { slug } }: { params: { slug: string } }) => {
  const [blog, setBlog] = useState<Blog | null>(null)
  type Comment = {
    username: string,
    comment: string
  }
  const [commentInput, setCommentInput] = useState<string>('')
  const [comments, setComments] = useState<Comment[]>([
    {
      username: "John Doe",
      comment: "This is a comment",
    },
    {
      username: "Alberto",
      comment: "This is asecond comment",
    }
  ])


  function commentInputHandler(e:ChangeEvent<HTMLTextAreaElement>) {
    setCommentInput(e.target.value)

  }
  function AddComment() {
    setComments([{ username: "You", comment: commentInput }, ...comments])
    setCommentInput('')

  }



  useEffect(() => {
    async function getData() {
      const blogs: Blog[] = await client.fetch(`*[slug.current == $slug]{
        author,
          _updatedAt,
          title,
          "slug":slug.current,
          categories,
          content,
        
        "imageUrl":mainImage.asset->url
      } `
        , { slug }
      )


      console.log(blogs)
      setBlog(blogs[0])

    }
    getData()

  })





  return (
    <div>
      <div className='w-full h-[500px] flex items-center blogs_bg justify-center'>
        <h1 className='sm:text-7xl text-5xl font-extrabold text-white '>Blog Details</h1>
      </div>
      <div className="w-full h-[100px] relative top-[-100px] bottom_brush">
      </div>
      <div className="blog w-[90%] lg:w-[60%] sm:pt-10 pb-20 flex flex-col items-center m-auto ">
        <div className="img w-full">
          <Image
            src={blog?.imageUrl || ""}
            alt='no icon found'
            width={1300}
            height={300}

          />
        </div>
        <div className="body w-full pt-10">
          <div className="flex opacity-55">
            <div className="flex  items-center ">
              <Image
                src={"/icons/calender.svg"}
                alt='no icon found'
                width={34}
                height={34}
                className=''
              />
              <p className={`sm:pl-4 pl-2 text-sm sm:text-lg`}>{blog?._updatedAt.split("T")[0]}</p>
            </div>
            <div className="flex sm:pl-10 pl-5 items-center ">
              <Image
                src={"/icons/author.svg"}
                alt='no icon found'
                width={34}
                height={34}
                className=''
              />
              <p className={`sm:pl-4 pl-2 text-sm sm:text-lg`}>{blog?.author}</p>
            </div>
          </div>
          <h1 className='sm:text-6xl text-3xl font-extrabold pt-5'>{blog?.title}</h1>
          <p className='text-xl pt-5'>{(blog?.content)?.split("1")[0]}</p>
          <p className='text-xl pt-5'>{(blog?.content)?.split("1")[1].split("2")[0]}</p>
          <p className='text-xl pt-5'>{(blog?.content)?.split("2")[1].split("3")[0]}</p>
          <p className='text-xl pt-5'>{(blog?.content)?.split("3")[1].split("4")[0]}</p>
          <p className='text-xl pt-5'>{(blog?.content)?.split("4")[1].split("5")[0]}</p>
          <p className='text-xl pt-5'>{(blog?.content)?.split("5")[1].split("6")[0]}</p>
          <p className='text-xl pt-5'>{(blog?.content)?.split("6")[1].split("7")[0]}</p>
          <p className='text-xl pt-5'>{(blog?.content)?.split("7")[1].split("8")[0]}</p>
          <p className='text-xl pt-5'>{(blog?.content)?.split("8")[1].split("9")[0]}</p>
          <p className='text-xl pt-5'>{(blog?.content)?.split("9")[1].split("10")[0]}</p>
        </div>
        <div className="comments w-full pt-20">
          <h1 className='text-4xl font-extrabold'>Comments</h1>
          {comments.map((comment, index) => {
            return <div key={index} className='w-full flex mt-10 pb-10'>
              <div className='h-10 w-10 bg-cyan-500 rounded-full flex justify-center items-center '>{comment.username[0]}</div>
              <div className='w-[80%] pl-4'>
                <h1 className='text-xl font-semibold'>{comment.username}</h1>
                <p>{comment.comment}</p>
              </div>
            </div>
          })}


          <div className='w-full pt-10  flex flex-col justify-evenly items-center'>
            <textarea onChange={commentInputHandler} value={commentInput}  placeholder='Write Your Comment Here' className='p-3 h-[200px] w-full bg-transparent border-4 border-gray-300 ' />
           <Button className='bg-primary h-[40px] px-10 py-5 mt-10' onClick={AddComment}>Post Comment</Button>
             
            


          </div>

        </div>


      </div>
    </div>
  )
}

export default BlogDetails