"use client"
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '@/store/slice/cartSlice'; 
import toast from 'react-hot-toast';
import { Image as IImage } from "sanity";
import { FC } from 'react';
import { RootState } from '@/store/store';
import { useState } from 'react';


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





  const handleAddToCart = () => {
    // const updatedQuantity = cartItem ? cartItem.quantity;

    const { _id, title, description, price, image, category } = item;
    const product = { _id, title, description, price, image, category };



    // handleQuantityChange();

    dispatch(cartActions.addToCart({ product, quantity:  1, price }));
    toast.success("Product has been added to the Cart!");
  };
  
  return (
    <div>
      <button onClick={handleAddToCart} className='bg-black px-6 py-2 hover:text-green-500 font-bold rounded-lg text-white'>
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
