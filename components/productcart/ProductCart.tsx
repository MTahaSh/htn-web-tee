"use client"
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { cartActions } from '@/store/slice/cartSlice';
import {BsArrowRightCircle} from "react-icons/bs"
import {Image as IImage, renderStudio} from "sanity";
import React from 'react'
import { FC } from 'react';
import Link from 'next/link';



export const ProductCart: FC<{item:any}> = ({item}) =>  {

    // const dispatch = useDispatch()


    

  return (
    
    <div className="lg:w-full h-full md:w-full sm:w-[90%] border-solid border-gray-200 border-2" >
      <Link href={`/Products/${item._id}`} key={item._id} >
        <div className="flex  relative ">
          <Image alt="gallery" className="absolute inset-0 w-full max-h-[200px] h-full object-contain object-center" src={urlForImage(item.image).url()} width={400} height={400}></Image>
          <div className="px-8 py-5 relative z-1 w-full border-0  ease-in-out transition-all delay-200 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-xl title-font font-bold text-black mb-1">{item.title}</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">£{item.price}</h1>
            <p className="leading-relaxed mb-5 overflow-hidden  line-clamp-3 ">{item.description}</p>
            <button className=' px-4 py-3 rounded-lg flex  items-center  border-2 bg-transparent hover:bg-black text-black hover:text-white font-bold'>See more <BsArrowRightCircle className='ml-3'/> </button>
            
          </div>
        </div>
        </Link>
      </div>
      

  )


}

