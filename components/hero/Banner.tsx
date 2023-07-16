"use client"
import React from 'react'
import {BsArrowRightCircle} from "react-icons/bs"
import { useRouter } from 'next/navigation'

const Banner = () => {
    const router = useRouter();
  return (
    <div className='md:w-full md:h-80  w-full h-screen   my-16 px-8' >
        <div className='flex md:justify-end self-center justify-center items-center md:bg-cover md:h-full h-1/2 bg-auto bg-no-repeat bg-center ' style={{backgroundImage:`url("banner.png")`, height:'100%', width:'100%', objectFit:'contain'}}>
            <div className='bg-red-500 lg:w-1/4 md:w-1/3  w-[70%] h-64 md:mr-10 mr-0 flex justify-center items-center text-2xl'>
                <div className='flex flex-col ml-6 space-y-6 flex-left'>
                <h1 className='font-bold md:text-5xl text-2xl text-white'>Amazing Consoles</h1>
                <button onClick={()=>router.push("/Products")} className=' px-2 py-3 transition-all ease-in delay-100 rounded-lg flex items-center text-black hover:text-white font-bold'>See more <BsArrowRightCircle className='ml-3'/> </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Banner