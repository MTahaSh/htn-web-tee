// "use client"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/store/slice/cartSlice';
import SuccessComp from './SuccessComp';
import { auth } from '@clerk/nextjs';

const CheckoutSuccess = () => {

  const { userId, sessionId } = auth();
  // const dispatch = useDispatch();

  // useEffect(() => {
    
  //   dispatch(cartActions.clearCart());
  // }, [dispatch]);

  return (
    <SuccessComp userId={userId} sessionId={sessionId}/>
  )
};

export default CheckoutSuccess;
