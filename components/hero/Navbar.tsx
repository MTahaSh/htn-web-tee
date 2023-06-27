"use client"
import Image from "next/image";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { UserButton } from "@clerk/nextjs";

import Link from "next/link";




const Navbar = () => {
  const [click,setClick] = useState(false)
  
  const onClickHandler = ()=>{
    setClick(!click);
  
  }

  const cartValue = useSelector((state:RootState)=> state.cartSlice.totalQuantity );

  return (
    <div className="relative h-full z-10">
    <nav className="flex shadow-gray-200  shadow-sm  justify-between items-center h-20 px-5 fixed w-full bg-white ">
      
      <button onClick={onClickHandler}><Menu  className="lg:hidden flex cursor-pointer"/></button>
      <Link href={"/"}><Image src={"/logoRemove.png"} alt="website logo" width={200} height={200} /></Link>
      {/* <h1 className="scroll-m-20 text-xl font-bold tracking-tight lg:text-3xl">ConsoleMania</h1> */}
      
      <div className={`${click? "left-0":"left-[-500px]"}  ease-in duration-500 space-y-10 text-white flex flex-col absolute inset-0 lg:hidden  h-screen p-6   w-1/2 bg-black`}>

        <span><button onClick={onClickHandler}><X className="cursor-pointer"/></button></span>

        <div className="space-y-16 flex-col flex">
        <Link href={"/Xbox"}>Xbox</Link>
        <Link href={"/Playstation"}>PlayStation</Link>
        <Link href={"/Products"}>All Products</Link>
        </div>

      </div>

      <div className="space-x-16 lg:flex hidden">
        <Link href={"/Xbox"}>Xbox</Link>
        <Link href={"/Playstation"}>PlayStation</Link>
        <Link href={"/Products"}>All Products</Link>
        
      </div>
      <div className="lg:flex hidden">
        <Search className="bg-white rounded-l" />{" "}
        <input
          type="text"
          placeholder="What you are looking for"
          className="rounded-r"
        ></input>
      </div>
      <div className="border-4 rounded-full border-green-500 ">
      <UserButton  afterSignOutUrl="/sign-in"/>
      </div>
      <div className="p-2 rounded-full bg-gray-300">
        <Link href={"/ShoppingCart"}>
        <ShoppingCart className="relative cursor-pointer" />
        <span className="absolute top-2 right-5 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
          {cartValue}
        </span>
        </Link>  
      </div>
      
    
      
    </nav>
    
    </div>
  );
};

export default Navbar;