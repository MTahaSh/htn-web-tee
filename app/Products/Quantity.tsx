import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '@/store/slice/cartSlice';
import { RootState } from '@/store/store';
import { Image as IImage } from "sanity";
import { FC } from 'react';

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

export const Quantity: FC<{ item: IProduct }> = ({ item }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) =>
    state.cartSlice.items.find((cartItem) => cartItem._id === item._id)
  );

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    } else {
      setQuantity(1); // Reset quantity to 1 if item not found in cart
    }
  }, [cartItem]);


  const handleQuantityChange = (newQuantity: number) => {
    dispatch(cartActions.updateQuantity({ productId: item._id, quantity: newQuantity }));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      handleQuantityChange(newQuantity);
    }
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(cartActions.incrementQuantity({ productId: item._id, quantity: newQuantity }));
  };

  return (
    <div>
      <div>
        <button
          onClick={handleDecrement}
          className='ml-auto rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center bg-red-600 text-white mr-4'
        >
          -
        </button>

        <span className="text-gray-900 text-center self-center">{quantity}</span>

        <button
          onClick={handleIncrement}
          className='rounded-full w-10 h-10 bg-red-600 p-0 border-0 inline-flex items-center justify-center text-white ml-4'
        >
          +
        </button>
      </div>
    </div>
  );
};
