"use client"
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '@/store/slice/cartSlice'; 
import toast from 'react-hot-toast';
import { Image as IImage } from "sanity";
import { FC } from 'react';
import { RootState } from '@/store/store';
import { useState } from 'react';
// import { auth } from '@clerk/nextjs';
import { useEffect } from 'react';

// const { userId, sessionId } = auth();



interface IProduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: IImage;
  category: {
    name: string;
  };
 
}

const AddToCart: FC<{ item: IProduct }> = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cartSlice.items);
  

  const cartItem = cartItems.find((cartItem) => cartItem._id === item._id);
  // const handleQuantityChange = (quantity: number) => {
  //   dispatch(cartActions.updateQuantity({ productId: item._id, quantity }));
  // };

// console.log(cartItem);




  const handleAddToCart = () => {
  const { _id, title, description, price, image, category } = item;
  const product = { _id, title, description, price, image, category };

  // Dispatch the addToCart action to update the cart state
  dispatch(cartActions.addToCart({ product, quantity: 1, price }));
  toast.success("Product has been added to the Cart!");

  // Retrieve cart data from localStorage
  // const storedCartValue = localStorage.getItem('cartValue');
  // const storedTotalQuantity = localStorage.getItem('totalQuantity');
  // const storedTotalAmount = localStorage.getItem('totalAmount');

  // // Parse the JSON strings from localStorage
  // const parsedCartValue = storedCartValue ? JSON.parse(storedCartValue) : [];
  // const parsedTotalQuantity = storedTotalQuantity ? parseInt(storedTotalQuantity) : 0;
  // const parsedTotalAmount = storedTotalAmount ? parseFloat(storedTotalAmount) : 0;

  // // Update the cart data with the new item
  // const updatedCartValue = [...parsedCartValue, product];
  // const updatedTotalQuantity = parsedTotalQuantity + 1;
  // const updatedTotalAmount = parsedTotalAmount + price;

  // // Save the updated cart data to localStorage
  // localStorage.setItem('cartValue', JSON.stringify(updatedCartValue));
  // localStorage.setItem('totalQuantity', JSON.stringify(updatedTotalQuantity));
  // localStorage.setItem('totalAmount', JSON.stringify(updatedTotalAmount));
};

  
  return (
    <div>
      <button onClick={handleAddToCart} className='bg-white md:px-5 md:py-3 px-2 py-4 hover:text-white hover:bg-black ease-in-out transition-all font-bold rounded-lg text-black border-2 border-black '>
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
