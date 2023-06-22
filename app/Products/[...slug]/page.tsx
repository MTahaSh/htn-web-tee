import React from 'react'
import AddToCart from './AddToCart'
import {Image as IImage, renderStudio} from "sanity";
import { client } from '@/sanity/lib/client'
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

const getData = async()=>{
  const res = await client.fetch(`*[_type == "products"] {
    _id,
    title,
    description,
    price,
    image,
      category -> {
        name
      }
  }`);
  return res;
}

interface Iproduct{
  
    _id:string,
    title:string,
    description:string,
    price:number,
    image:IImage,
      category:{  
        name:string
      }
  
}






export default async function page({params}: {params:{slug:string}}) {
  const data: Iproduct[] = await getData();

  const getProductDetail = (id:string) => {
    return data.filter((item)=>item._id == id)
  }

const result = getProductDetail(params.slug);
console.log(result);




  return (
    <div>
      {result.map((item)=>(
        <section className="text-gray-600 body-font w-full overflow-hidden">
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{item.category.name}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{item.title}</h1>
              <div className="flex mb-4">
                <p className="flex-grow text-gray-500   py-2 text-lg px-1">{item.description}</p>
                
                
              </div>
              
              
              <div className="flex border-t border-b mb-6 border-gray-200 py-2 ">
                <span className="text-gray-500 self-center">Quantity</span>
                
                
                <button className='ml-auto rounded-full w-10 h-10  p-0 border-0 inline-flex items-center justify-center bg-red-600 text-white mr-4'>-</button>
                <span className=" text-gray-900 text-center self-center">4</span>
                <button className='rounded-full w-10 h-10 bg-red-600 p-0 border-0 inline-flex items-center justify-center  text-white ml-4'>+</button>
                
              </div>
              <div className="flex justify-between">
                <span className="title-font font-medium text-2xl text-gray-900">${item.price}</span>
              
                <div className='flex  text-white '>
                <AddToCart/>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
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
        
      ))}
        
    </div>
  )
}

