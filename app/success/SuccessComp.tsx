"use client"
import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/store/slice/cartSlice';
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useRouter } from 'next/navigation';
import { TbConfetti } from "react-icons/tb"
// import Lottie from 'react-lottie-player'
import lottieJson from '@/public/tickP.json'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const SuccessComp = ({ userId, sessionId }: any) => {
  const router = useRouter();
  const cartValue = useSelector((state: RootState) => state.cartSlice.items);
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state: RootState) => state.cartSlice.totalQuantity);

  const productId = cartValue.map((item) => item._id);
  const productQuantity = cartValue.map((item) => item.quantity);
  // console.log("Your productId " + productId);
  // console.log("Your productQuantity " + productQuantity);

  const updateNewCartValues = async () => {
    if (totalQuantity !== 0) {
      const res = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({
          user_id: userId,
          product_qty: productQuantity,
          product_id: productId,
          qty: totalQuantity,

        })
      })
    }
    // const result = await res.json();
    // console.log("Post data: " + result);

  }
  useEffect(() => {
    updateNewCartValues();
    dispatch(cartActions.clearCart());
  }, [dispatch, updateNewCartValues]);

  return (
    <div className="text-center flex items-center ">
      <div className="flex items-center justify-center bg-white w-full h-screen flex-col space-y-8">
        <div className='self-center  justify-center flex flex-col items-center'>
          {/* <TbConfetti className='text-[100px]  self-center font-bold mx-7'/> */}
          {/* <Lottie

            loop
            animationData={lottieJson}
            play
            style={{ width: 150, height: 150 }}
          /> */}

          <Player
            autoplay
            loop
            src={lottieJson}
            style={{ height: '200px', width: '200px' }}
          > 
          </Player>



          <div className='flex-col space-y-6'>
            <h1 className="text-4xl self-center font-bold">  Thanks for Shopping with Us! </h1>
            <h1 className="text-xl  text-black/50">  Gratitude meets Retail Therapy </h1>
          </div>
        </div>

        <div className='border-black border-2 rounded-lg hover:bg-black hover:text-white transition delay-100 ease-in-out font-bold'>
          <button onClick={() => { router.push("/") }} className='p-4  '>Continue Shopping</button>
        </div>

      </div>
    </div>
  )
}

export default SuccessComp