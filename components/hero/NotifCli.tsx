"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const NotifCli = () => {
    const pathname = usePathname();
  return (
    <div className={`w-full ${pathname === "/sign-up" || pathname === "/sign-in"?"hidden":"flex"}`}>
        <div className="w-full bg-black h-20 flex items-center justify-center ">
          <h2 className='text-white text-xl font-bold  text-center'>You seem like a new user! Would you like to <Link href={"/sign-up"}> <span className='text-blue-500 hover:text-white cursor-pointer ease-in transition-all delay-100'>sign up</span></Link>?
          </h2>
        </div>
    </div>
  )
}

export default NotifCli