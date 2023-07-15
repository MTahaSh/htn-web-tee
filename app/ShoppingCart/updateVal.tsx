"use client"
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { cartActions } from '@/store/slice/cartSlice'
import { Checkout } from './Checkout'
import {db, cartTable} from "@/sanity/lib/drizzle"
import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react'
import { useRouter } from "next/navigation";
import {HiOutlineShoppingBag} from "react-icons/hi"



export default function UpdateVal({userId,sessionId}:any) {
    const cartValue = useSelector((state:RootState)=> state.cartSlice.items);
    const totalQuantity = useSelector((state:RootState)=> state.cartSlice.totalQuantity);
    const totalAmount = useSelector((state:RootState)=> state.cartSlice.totalAmount);
    const dispatch = useDispatch();
    const { isLoaded, isSignedIn, user } = useUser()
    const userName = user?.username;
    const { refresh } = useRouter();
    const router = useRouter();

    
    // const [data,setData] = useState();
    // interface IData {
    //   user_id: string,
    //   session_id: string
    // }

    // const getData = async () => {
      
    //   const res = await fetch(`/api/cart/${}`,
    //   {
    //     method:"GET",
    //     cache:"no-store",
    //     headers:{
    //         "content-type": "application/json"
    //   }
    
    // }) 
    // return res.json();

    // }
    

    // const productId = cartValue.map((item)=> item._id );
    // const quantity = cartValue.map((item)=> item.quantity );


    // console.log("Cart Values: " + productId[0]);


    // const updateNewCartValues = async () => {
      
    //   const res = await fetch("/api/user", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       userid: userId,
    //       sessionid: sessionId,
    //       productid: productId,
    //       qty: totalQuantity,

    //     })
    //   })
      
    // }
    
      const updateCartValues = async () => {
        const res = await fetch("/api/cart", {
          method: "POST",
          body: JSON.stringify({
            userid: userId,
            sessionid: sessionId,
          })
        })
        
      }

    useEffect(() => {
      updateCartValues();
      // updateNewCartValues();

    }, []);

        
        // const res = await db
        //   .insert(cartTable)
        //   .values({
        //     user_id: userId as string,
        //     session_id: sessionId as string,
        //     username: user?.username as string,
        //   })
        

  

  const handleQuantityChange = (productId: string, quantity: number) => {
    dispatch(cartActions.updateQuantity({ productId, quantity }));
  };  
  
  const handleRemoveItem = (productId: string) => {
    dispatch(cartActions.removeFromCart(productId));
  };
  
  const handleDecrement = (productId: string, quantity: number) => {
    if (quantity > 1) {
      handleQuantityChange(productId, quantity - 1);
    }
  };
  
  const handleIncrement = (productId: string, quantity: number) => {
    handleQuantityChange(productId, quantity + 1);
  };
  
  
  
    return (
      <div>
  
  <section >
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl ">

        <header className={`flex text-center justify-center items-center space-y-10 p-32 flex-col ${totalQuantity == 0? "flex":"hidden"} `}>
          
          <h1 className="text-5xl font-bold  text-gray-900 "><HiOutlineShoppingBag className='text-center'/></h1>
          <h1 className="text-3xl font-bold  text-gray-900 ">Cart is empty</h1>
          <button onClick={()=>router.push("/Products")} className='px-5 py-3 border-2 border-black border-solid bg-transparent text-black hover:bg-black/90 hover:text-white transition-all delay-200 ease-in-out font-bold'>Shop now</button>
          
          </header>

          
          {/* <h2>{userId}</h2>
          <h2>{sessionId}</h2>
          <div>{user?.firstName}</div>
          <div>{user?.username}</div> */}
  
  
  
        <div className="mt-8 " >
          <ul className="space-y-4">
          {cartValue.map((item)=>(
            <li key={item._id} className="flex items-center lg:flex-row flex-col shadow-lg  px-4 py-6 lg:space-y-0 space-y-5  gap-4">
  
              
               <Image alt={`${item.title}`} className=" lg:w-1/6 w-full lg:h-auto h-64 object-contain object-center rounded" src={urlForImage(item.image).url()} width={400} height={400}></Image>
            
              <div>
                <h3 className="text-md font-bold text-gray-900">{item.title}</h3>
  
                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline font-bold text-lg ">Category: </dt>
                    <dd className="inline font-bold text-lg">{item.category.name}</dd>
                  </div>
  
                  <div>
                    <dt className="inline font-bold text-lg">Price: </dt>
                    <dd className="inline font-bold text-lg">£{item.price}</dd>
                  </div>
                </dl>
              </div>
  
              <div className="flex flex-1 items-center justify-end gap-2">
              <div className="flex items-center gap-2">
                  
              <button onClick={() => handleDecrement(item._id, item.quantity)}
                        className="text-gray-600  font-bold text-xl transition hover:text-red-600"
                      >-</button>
                  
                  <span className='text-2xl' > {item.quantity} </span>
                  
  
                  <button onClick={() => handleIncrement(item._id, item.quantity)}
                        className="text-gray-600 font-bold text-xl transition hover:text-green-600"
                      >+</button>
                  </div>
  
                  
  
                <button onClick={()=>handleRemoveItem(item._id)} className="text-gray-600 transition hover:text-red-600">
                  <span className="sr-only">Remove item</span>
  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-8 w-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </li>
            ))}
  
          </ul>
  
          <div className={`mt-8 flex justify-end border-t border-gray-100 pt-8 ${totalQuantity==0?"hidden":"block"} `}>
            <div className="w-screen max-w-lg space-y-4">
              <dl className="space-y-0.5 text-sm text-gray-700">
                <div className="flex justify-between">
                  <dt>Quantity</dt>
                  <dd>{totalQuantity}</dd>
                </div>
  
                <div className="flex justify-between !text-base font-medium">
                  <dt>Total</dt>
                  <dd>£{totalAmount.toFixed()}</dd>
                </div>
              </dl>
  
              <div className="flex justify-end">
                <Checkout key={"items"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  
  
  
  
      </div>
    )
}
