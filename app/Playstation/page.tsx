import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { Item } from '@radix-ui/react-navigation-menu'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Image as IImage} from "sanity"


const getData = async()=>{
  const res = await client.fetch(`*[_type == 'products']{
    _id,
    title,
    description,
    image,
    price,
    category -> {
      name
    } 
  }`)


  


  return res;
}

interface Iproduct{
    _id: string,
    title:string,
    description:string,
    image:IImage,
    price:number
    category: {
      name:string

    }

}


export default async function Playstation() {

  const data : Iproduct[] = await getData();


  return (
    <div>
     
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">PlayStation Consoles</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Experience gaming excellence with PlayStation consoles. Unleash breathtaking graphics, seamless gameplay, and a vast library of captivating titles. Elevate your gaming journey with PlayStation.</p>
    </div>




    <div className="flex flex-wrap -m-4">


      {data.map((item)=>(
         
         

         
        item.category.name == "PlayStation"? 
        <div className="lg:w-1/3 sm:w-1/2 p-4" key={item._id}>
        <Link href={`/Products/${item._id}`}>
        <div className="flex relative">
          <Image alt="products" className="absolute inset-0 w-full max-h-[300px] h-full object-contain object-center" src={urlForImage(item.image).url()} width={400} height={400}></Image>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-xl title-font font-bold text-black mb-1">{item.title}</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">£{item.price}</h1>
            <p className="leading-relaxed">{item.description}</p>
          </div>
        </div>
        </Link>
      </div> : ""
     
      ))}
      
    </div>
  </div>
</section>
    </div>
  )
}
