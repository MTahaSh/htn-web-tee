"use client"
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image'

import {Image as IImage, renderStudio} from "sanity";
import React from 'react'
import { FC } from 'react';

export const ProductCart: FC<{item:any}> = ({item}) =>  {

    const handleAddToCart = async () => {
        const res = await fetch("/api/cart",{
            method:"POST",
            body: JSON.stringify(
                {
                    product_id: item._id
                }
            )
        })
        const result = await res.json();
        console.log(result);
        
    }

  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4" >
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full max-h-[300px] h-full object-contain object-center" src={urlForImage(item.image).url()} width={400} height={400}></Image>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-xl title-font font-bold text-black mb-1">{item.title}</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">£{item.price}</h1>
            <p className="leading-relaxed">{item.description}</p>
            <button onClick={handleAddToCart} className='bg-blue-400 px-6 py-2 border rounded-lg my-6 text-white'>Add to cart</button>
          </div>
        </div>
      </div>
  )
}

