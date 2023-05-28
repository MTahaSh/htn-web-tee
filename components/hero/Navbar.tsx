"use client"
import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";

import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="flex  justify-between items-center h-20 px-20 fixed w-full bg-white z-10">
      <Link href={"/"}><Image src={"/logoRemove.png"} alt="website logo" width={200} height={200} /></Link>
      {/* <h1 className="scroll-m-20 text-xl font-bold tracking-tight lg:text-3xl">ConsoleMania</h1> */}
      
      <div className="space-x-16">
        <Link href={"/Xbox"}>Xbox</Link>
        <Link href={"/Playstation"}>PlayStation</Link>
        <Link href={"/Products"}>All Products</Link>
        
      </div>
      <div className="flex">
        <Search className="bg-white rounded-l" />{" "}
        <input
          type="text"
          placeholder="What you are looking for"
          className="rounded-r"
        ></input>
      </div>
      <div className="p-2 rounded-full bg-gray-300">
        <ShoppingCart className="relative cursor-pointer" />
        <span className="absolute top-2 right-20 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
          0
        </span>
      </div>
    </nav>
  );
};

export default Navbar;