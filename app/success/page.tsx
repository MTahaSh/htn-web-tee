"use client"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/store/slice/cartSlice';

const CheckoutSuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.clearCart());
  }, [dispatch]);

  return (
    <div className="text-center flex">
      <div className="flex justify-center items-center bg-yellow-400 w-full h-screen">
        <h1 className="text-4xl font-bold">Congratulations! The payment has been processed successfully!</h1>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
