import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image'
import React from 'react'
import {Image as IImage, renderStudio} from "sanity";
import {ProductCart} from "@/components/productcart/ProductCart"
import Product from '@/app/Products/page';
import Link from 'next/link';

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





export default async function Products() {
  
  const data: Iproduct[] = await getData();

  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">All Products</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Search and find the console according to your taste.</p>
    </div>
    
    
    <div className="flex flex-wrap -m-4">


      {data.map((item)=>(
        
        
        <ProductCart key={item._id} item={item}/>
       

      ))}
      


      

    </div>
  </div>
</section>
    </div>
  )
}
