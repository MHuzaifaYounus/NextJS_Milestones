"use client"
import React, { ChangeEvent, useState } from 'react'
import { posts } from "@/app/data"
import { MessageCircle, ThumbsUp, SendIcon } from "lucide-react";
import Image from 'next/image'

const PostId = ({ params }: { params: { postId: number } }) => {
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


  function commentInputHandler(e: ChangeEvent<HTMLInputElement>) {
    setCommentInput(e.target.value)

  }
  function AddComment() {
    setComments([ { username: "You", comment: commentInput } , ...comments])

  }
  return (
    <div className='w-[800px] max-[800px]:w-[90%]  m-auto pt-10 pb-10'>
      <div>
        <Image src={posts[params.postId].image} alt='no image' width={1000} height={500}></Image>
      </div>
      <div >
        <h1 className='text-4xl pt-10 max-[450px]:text-3xl font-black'>{posts[params.postId].title}</h1>
        <p className='text-2xl max-[450px]:text-xl pt-5'>{posts[params.postId].description}</p>
        <p className='text-xl max-[450px]:text-lg pt-5'>{posts[params.postId].pageContent}</p>
        <div className='mt-10 w-[200px] border-t-2 border-gray-900'>
          <h2><span className='font-bold'>Author:</span> {posts[params.postId].author}</h2>
          <h2><span className='font-bold'>Date:</span> {posts[params.postId].date}</h2>
        </div>
        <div className="flex pt-2  w-[110px] font-bold justify-around">{posts[params.postId].comments} <MessageCircle className="w-5 h-5"></MessageCircle> {posts[params.postId].likes} <ThumbsUp className="w-5 h-5"></ThumbsUp></div>
      </div>
      <h1 className='text-3xl pt-10  font-bold'>Comments Section</h1>

      <div className='w-full pt-10  flex justify-evenly items-center'>
        <input onChange={commentInputHandler} type="text" placeholder='Write Your Comment Here' className='p-3 bg-transparent border-2 border-cyan-500 rounded-xl w-[80%] ' />
        <button className='h-10 w-10 bg-cyan-500 rounded-xl border-2 border-cyan-500 flex justify-center items-center hover:bg-transparent hover:text-black text-white' onClick={AddComment}>
          <SendIcon></SendIcon>
        </button>


      </div>
      <div className='pt-10'>
        {comments.map((comment, index) => {
          return <div key={index} className='w-full border-b-2 border-cyan-500 flex mt-10 pb-10'>
            <div className='h-10 w-10 bg-cyan-500 rounded-full flex justify-center items-center '>{comment.username[0]}</div>
            <div className='w-[80%] pl-4'>
              <h1 className='text-xl font-semibold'>{comment.username}</h1>
              <p>{comment.comment}</p>
            </div>
          </div>
        })}

      </div>
    </div>
  )
}

export default PostId