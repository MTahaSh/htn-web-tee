"use client"
import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/store/slice/cartSlice';
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

const SuccessComp = ({userId,sessionId}:any) => {
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
      <div className="flex justify-center items-center bg-yellow-400 w-full h-screen">
        <h1 className="text-4xl font-bold">Congratulations! The payment has been processed successfully!</h1>
      </div>
    </div>
  )
}

export default SuccessComp