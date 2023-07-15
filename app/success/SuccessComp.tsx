"use client"
import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/store/slice/cartSlice';
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useRouter } from 'next/navigation';

const SuccessComp = ({userId,sessionId}:any) => {
  const router = useRouter();
    const cartValue = useSelector((state:RootState)=> state.cartSlice.items);
    const dispatch = useDispatch();
    const totalQuantity = useSelector((state:RootState)=> state.cartSlice.totalQuantity);

    const productId = cartValue.map((item)=> item._id);
    const productQuantity = cartValue.map((item)=> item.quantity);
    // console.log("Your productId " + productId);
    // console.log("Your productQuantity " + productQuantity);
    
    const updateNewCartValues = async () => {
      
        const res = await fetch("/api/user", {
          method: "POST",
          body: JSON.stringify({
            user_id: userId,
            product_qty: productQuantity,
            product_id: productId ,
            qty: totalQuantity,
  
          })
        })
        const result = await res.json();
        console.log("Post data: " + result);
        
      }
useEffect(() => {
    updateNewCartValues();
    dispatch(cartActions.clearCart());
  }, [dispatch]);

  return (
    <div className="text-center flex">
      <div className="flex justify-center items-center bg-white w-full h-screen flex-col space-y-8">
        <h1 className="text-4xl font-bold">Congratulations! The payment has been processed successfully!</h1>
        <div className='border-black border-2 rounded-lg hover:bg-black hover:text-white font-bold'>
        <button onClick={()=>{router.push("/")}} className='p-4  '>Continue Shopping</button>
        </div>
      
      </div>
    </div>
  )
}

export default SuccessComp