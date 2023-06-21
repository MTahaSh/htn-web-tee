"use client"

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import  {counterActions} from "@/store/slice/cartSlice"


const CounterView = () => {
  
  const dispatch = useDispatch();
  const countervalue = useSelector((state:RootState)=> state.cartSlice.value );
  
  const increment = () => {
    dispatch(counterActions.increment());
  };
    const decrement = () => {
    dispatch(counterActions.decrement());
  };

  
  return (

        <div className='py-6 flex gap-6 justify-center'>
          <button className='py-4 px-3 rounded-md bg-green-500' onClick={increment}>Increment</button>
        <div>Counter Value {countervalue}</div>
          <button className='py-4 px-3 rounded-md bg-red-400' onClick={decrement}>Decrement</button>
        </div>


    )
}

export default CounterView;