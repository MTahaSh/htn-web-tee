import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { cartActions } from '@/store/slice/cartSlice'
import { Checkout } from './Checkout'
import UpdateVal from "@/app/ShoppingCart/updateVal"
import { auth } from '@clerk/nextjs';


export default function Page() {

  const { userId, sessionId } = auth();
  
    // console.log("User ID: " + userId);
    // console.log("Session Id: "+sessionId);
    
    
    
    
    
  return(
    <>
    <UpdateVal userId={userId} sessionId={sessionId}/>
    
    </>
  
  )
  
}


