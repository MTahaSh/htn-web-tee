"use client"
import React from 'react'
import {ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image"
// import {useRouter} from 'next/router';
import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { cartActions } from '@/store/slice/cartSlice';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  



export default  function Hero({userId}:any) {
  const { isLoaded, isSignedIn, user } = useUser();
  const { refresh } = useRouter();
  const dispatch = useDispatch();
  const router = useRouter();
  // const [hasReloaded, setHasReloaded] = useState(false);




  // useEffect(() => {
    if (!isSignedIn && !userId) {
      dispatch(cartActions.clearCart());
      
      localStorage.setItem('userId', " ");

    } else{
      
      localStorage.setItem('userId', userId ?? '');
      
    }
  // }, [isSignedIn, userId,dispatch]);

 
  

  return (

    <div className='flex px-4 py-10  border-b-2 bg-green-500  border-gray-200'>
    <section className="text-gray-600 body-font">

      
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col  items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col space-y-6  md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-5xl mb-4 font-bold text-white">The ultimate gaming experience, take it home with us
        {/* <br className="hidden lg:inline-block">readymade gluten </br> */}
      </h1>

      <p className="mb-8 leading-relaxed text-white">
Unlock the gaming realm of your dreams at our Ecommerce site. Explore our curated selection of consoles, from the latest releases to timeless classics. Find unbeatable deals, exclusive bundles, and a seamless shopping experience. Level up your gaming journey with us.</p>
      <div className="flex justify-center">
      
      <Link href={"/Products"}><Button className="m-5" >
        <ShoppingCart className="mr-2 h-5 w-5 flex-shrink-0" /> Start Shopping
      </Button></Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full relative md:w-1/2 w-5/6">
      <div className='bg-red-300 w-full z-[-1] opacity-50 right-20 h-full hidden lg:block rounded-full absolute'></div>
      <Image className='opacity-80' src={"/console.jpg"} alt='/' width={350} height={400}></Image>
    </div>

  </div>



  {/* Slider div */}
  
  




</section>

{/* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Image src={"/banner.png"} width={500} height={500} alt='/'/> </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
     */}


    </div>
  )
}