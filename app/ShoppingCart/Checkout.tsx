import React from 'react'
import getStripePromise from "@/lib/stripe"
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export const Checkout = () => {


    const totalQuantity = useSelector((state:RootState)=> state.cartSlice.totalQuantity);
    const totalAmount = useSelector((state:RootState)=> state.cartSlice.totalAmount);
    const cartValue = useSelector((state:RootState)=> state.cartSlice.items);

    // const {_id, title, price, quantity} = cartValue;

    const products = cartValue.map((item) => ({
        product: item._id,
        name: item.title,
        price: item.price,
        quantity: item.quantity,
      }));
    
     
    
      
    
      const handleCheckout = async() => {
        const stripe = await getStripePromise();
        // console.log(getStripePromise);
          
        const response = await fetch("api/stripeSession/",{
          method:"POST",
          headers: {"Content-Type" : "application/json" },
          cache: "no-cache",
          body: JSON.stringify(products),
        });
        
        const data = await response.json();
    
        if(data.session )
        {
          stripe?.redirectToCheckout({sessionId: data.session.id});
          
        }
    
    
      }



  return (
    <div>

        <button className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600" onClick={handleCheckout}>Checkout</button>



    </div>
  )
}
