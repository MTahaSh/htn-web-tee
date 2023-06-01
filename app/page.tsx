import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import Product from '@/components/products/Product'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import { Image as IImage } from 'sanity'


export default async function Home() {

  
  return (
    <>
   
    <Hero/>
    <Product/>
    
    </>
  )

}

