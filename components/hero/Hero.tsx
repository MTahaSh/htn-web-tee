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
import {Autoplay , Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




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

    <div className='flex px-4 py-10  border-b-2 w-full h-screen  justify-center items-center border-gray-200'>
    
    <section className="text-gray-600 body-font w-full h-full flex items-center justify-center text-center">

      
  <Swiper className='flex justify-center items-center self-center w-full h-full'
// install Swiper modules
modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
spaceBetween={50}
slidesPerView={1}
autoplay={{
  delay: 2500,
  disableOnInteraction: false,
}}
navigation
pagination={{ clickable: true }}
scrollbar={{ draggable: true }}
onSwiper={(swiper) => console.log(swiper)}
onSlideChange={() => console.log('slide change')}
>

<div className='flex justify-center items-center'>

<SwiperSlide className='flex md:justify-end self-center justify-center items-center md:bg-cover md:h-full h-1/2 bg-auto bg-no-repeat bg-center object-cover object-center' style={{backgroundImage:`url("gallery1.webp")`, height:'100%', width:'100%',objectFit:'cover', objectPosition:"top"}}>

<div className="container mx-auto flex px-5   md:flex-row flex-col justify-center h-screen">                                                                                      
  
<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:ml-6 ml-0 flex flex-col space-y-6 h-full justify-center  md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    
    <h1 className="title-font lg:text-5xl md:text-4xl text-3xl mb-4 font-bold text-white">The ultimate gaming experience, take it home with us
      
    </h1>

    <p className="mb-8 leading-relaxed text-white">
Unlock the gaming realm of your dreams at our Ecommerce site. Explore our curated selection of consoles, from the latest releases to timeless classics. Find unbeatable deals, exclusive bundles, and a seamless shopping experience. Level up your gaming journey with us.</p>
    <div className="flex justify-center">
    
    <Link href={"/Products"}><Button className="m-5" >
      <ShoppingCart className="mr-2 h-5 w-5 flex-shrink-0" /> Start Shopping
    </Button></Link>
    </div>
  </div>
</div>
</SwiperSlide>

<SwiperSlide className='flex md:justify-end self-center justify-center items-center md:bg-cover md:h-full h-1/2 bg-auto bg-no-repeat bg-center object-fit object-center' style={{backgroundImage:`url("gallery4.jpg")`, height:'100%', width:'100%',objectFit:'cover', objectPosition:"top"}}>

<div className="container mx-auto flex px-5   md:flex-row flex-col justify-center h-screen">                                                                                      
  
<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:ml-6 ml-0 flex flex-col space-y-6 h-full justify-center  md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    
    <h1 className="title-font lg:text-5xl md:text-4xl text-3xl mb-4 font-bold text-white">Gaming Paradise: Your Online Destination for the Ultimate Gaming Experience
      
    </h1>

    <p className="mb-8 leading-relaxed text-white">
    Discover a wide range of gaming consoles, from the latest releases to timeless classics, at our online store. Enjoy unbeatable deals, exclusive bundles, and a user-friendly shopping experience. Level up your gaming journey with us.</p>
    <div className="flex justify-center">
    
    <Link href={"/Products"}><Button className="m-5" >
      <ShoppingCart className="mr-2 h-5 w-5 flex-shrink-0" /> Start Shopping
    </Button></Link>
    </div>
  </div>
</div>
</SwiperSlide>

 <SwiperSlide className='flex md:justify-end self-center justify-center items-center md:bg-cover md:h-full h-1/2 bg-auto bg-no-repeat bg-center ' style={{backgroundImage:`url("gallery5.jpg")`, height:'100%', width:'100%', objectFit:'cover', objectPosition:"top"}}>

<div className="container mx-auto flex px-5   md:flex-row flex-col justify-center h-screen">                                                                                      
  
<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:ml-6 ml-0 flex flex-col space-y-6 h-full justify-center  md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    
    <h1 className="title-font lg:text-5xl md:text-4xl text-3xl mb-4 font-bold text-white">Level Up at Our Online Gaming Store: Your One-Stop Shop for Gaming
      
    </h1>

    <p className="mb-8 leading-relaxed text-white">
    Explore our curated selection of gaming consoles at our online store. Find great deals, exclusive bundles, and a seamless shopping experience. Take your gaming to the next level with us.</p>
    <div className="flex justify-center">
    
    <Link href={"/Products"}><Button className="m-5" >
      <ShoppingCart className="mr-2 h-5 w-5 flex-shrink-0" /> Start Shopping
    </Button></Link>
    </div>
  </div>
</div>
</SwiperSlide>


</div>
</Swiper>

 
  
  




</section>










{/*
 <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col  items-center">
  
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col space-y-6  md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    
      <h1 className="title-font sm:text-4xl text-5xl mb-4 font-bold text-white">The ultimate gaming experience, take it home with us
        
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


*/}
   

    </div>
  )
}