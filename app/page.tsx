import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import Product from '@/components/products/Product'
import { client } from '@/sanity/lib/client'
import { ClerkProvider } from '@clerk/nextjs'
import Image from 'next/image'
import { Image as IImage } from 'sanity'


export default function Home() {

  
  return (
    <>
    
    <Hero/>
    <Product/>
    
    </>
  )

}

