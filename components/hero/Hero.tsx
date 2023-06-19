"use client"
import React from 'react'
import {ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

  import getStripePromise from "@/lib/stripe"



export default  function Hero() {
  const products = [
    {
      product: 1,
      name: "Stripe Product",
      price: 400,
      quantity: 3,
    },
  ];

 



  const handleCheckout = async() => {
    const stripe = await getStripePromise();
    // console.log(getStripePromise);
      
    const response = await fetch("api/stripeSession/",{
      method:"POST",
      headers: {"Content-Type" : "application/json" },
      cache: "no-cache",
      body: JSON.stringify(products),
    });
    
    const data = await response.json();

    if(data.session )
    {
      stripe?.redirectToCheckout({sessionId: data.session.id});
      
    }


  }


  return (

    <div className='flex px-4'>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-5xl mb-4 font-bold text-gray-900">The ultimate gaming experience, take it home with us
        {/* <br className="hidden lg:inline-block">readymade gluten </br> */}
      </h1>

      <p className="mb-8 leading-relaxed">
Unlock the gaming realm of your dreams at our Ecommerce site. Explore our curated selection of consoles, from the latest releases to timeless classics. Find unbeatable deals, exclusive bundles, and a seamless shopping experience. Level up your gaming journey with us.</p>
      <div className="flex justify-center">
      <Button className="m-5" onClick={handleCheckout}>
        <ShoppingCart className="mr-2 h-5 w-5 flex-shrink-0" /> Start Shopping
      </Button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full relative md:w-1/2 w-5/6">
      <div className='bg-red-300 w-full z-[-1] opacity-50 right-20 h-full rounded-full absolute'></div>
      <Image className='opacity-80' src={"/console.jpg"} alt='/' width={350} height={400}></Image>
    </div>
  </div>
</section>

    


    </div>
  )
}