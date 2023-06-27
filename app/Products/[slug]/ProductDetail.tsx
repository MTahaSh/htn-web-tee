
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image'
import {Image as IImage, renderStudio} from "sanity";
import React from 'react'
import { FC } from 'react';
import Link from 'next/link';
import AddToCart from './AddToCart'
import { Quantity } from '../Quantity';
import { useState, useEffect } from 'react';
import { IProduct } from '@/app/utils/Type';



export const ProductDetail: FC<{item:any}> = ({item}) =>  {

 return (
    <section key={item._id} className="text-gray-600 body-font w-full overflow-hidden">
            <div className="container px-5 py-24 mx-auto flex">
              <div className="lg:w-4/5 mx-auto flex flex-wrap   border-black">
                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 bg-green-500 p-5 border-2 border-black">
                  <h2 className="text-sm title-font text-white tracking-widest">{item.category.name}</h2>
                  <h1 className="text-gray-900 text-3xl title-font font-bold mb-4">{item.title}</h1>
                  <div className="flex mb-4">
                    <p className="flex-grow text-white   py-2 text-lg px-1">{item.description}</p>
                    
                    
                  </div>
                    
                  
                  <div className="flex border-b mb-6 border-white py-2 ">
                    {/* <span className="text-gray-500 self-center">Quantity</span>
                    
    
                    <Quantity key={item._id} item={item}/>
                    */}
                  </div>
                  <div className="flex justify-between">
                    <span className="title-font font-bold text-2xl text-gray-900">${item.price}</span>
                  
                    <div className='flex  text-white '>
                    <AddToCart key={item._id} item={item} />
                    <button className="rounded-full  w-10 h-10 bg-white p-0 border-2 border-black inline-flex items-center justify-center text-red-500 ml-4">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                    </div>
                  </div>
                </div>
                  <Image alt={`${item.title}`} className=" lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded" src={urlForImage(item.image).url()} width={400} height={400}></Image>
              </div>
            </div>
          </section>
    
 )  


    
}