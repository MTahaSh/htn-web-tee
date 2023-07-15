"use client"
import Image from "next/image";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { SignUp, UserButton } from "@clerk/nextjs";
import { useUser } from '@clerk/nextjs';
import { SignIn } from "@clerk/nextjs";
import toast from 'react-hot-toast';
import  Toaster  from "react-hot-toast";
import Link from "next/link";
// import { auth } from "@clerk/nextjs";



const Navbar = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [click,setClick] = useState(false)
  // const {userId} = auth();

  
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

        <div className="space-y-16 flex-col flex text-black/50 font-bold">
        <Link className="hover:text-black ease-in-out delay-100 transition-all" href={"/Xbox"}>Xbox</Link>
        <Link className="hover:text-black ease-in-out delay-100 transition-all" href={"/Playstation"}>PlayStation</Link>
        <Link className="hover:text-black ease-in-out delay-100 transition-all" href={"/Products"}>All Products</Link>
        </div>

      </div>

      <div className="space-x-16 lg:flex hidden text-black/50 font-bold">
        <Link className="hover:text-black ease-in-out delay-100 transition-all" href={"/Xbox"}>Xbox</Link>
        <Link className="hover:text-black ease-in-out delay-100 transition-all" href={"/Playstation"}>PlayStation</Link>
        <Link className="hover:text-black ease-in-out delay-100 transition-all " href={"/Products"}>All Products</Link>
        
      </div>
      <div className="lg:flex hidden">
        <Search className="bg-white rounded-l" />{" "}
        <input
          type="text"
          placeholder="What you are looking for"
          className="rounded-r"
        ></input>
      </div>
      <div className={`border-4 rounded-full border-green-500 ${!isSignedIn?"hidden":"flex"}`}>
      <UserButton  afterSignOutUrl="/"/>
      </div>
      <div className={`text-md ${!isSignedIn?"inline-block":"hidden"}`}>
      <Link href={"/sign-in"}>Sign In</Link>
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