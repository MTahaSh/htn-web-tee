import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import Product from '@/components/products/Product'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import { Image as IImage } from 'sanity'

export const getData = async()=>
{ 
  const res = await client.fetch(`*[_type == 'products'] {
    _id,
    title,
    description,
    image,
      category -> {
        name
      }
  }`);
  return res;

}

interface Iproduct {
  _id: string
  title: string,
  description: string,
  image: IImage,
  price:number
  category: {
    name: string
  }
} 

export default async function Home() {

  const data: Iproduct[] = await getData();
  console.log(data);
  
  return (
    <>
   
    <Hero/>
    <Product/>
    
    </>
  )

}

