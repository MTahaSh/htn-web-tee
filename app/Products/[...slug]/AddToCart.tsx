"use client"
import { useDispatch } from 'react-redux';
import { cartActions } from '@/store/slice/cartSlice'; 
import toast from 'react-hot-toast';

const AddToCart = () => {

    const dispatch = useDispatch()

    const handleAddToCart = async () => {
        // const res = await fetch("/api/cart",{
        //     method:"POST",
        //     body: JSON.stringify(
        //         {
        //             product_id: item._id
        //         }
        //     )
        // })
        // const result = await res.json();
        // console.log(result);

        dispatch(cartActions.addToCart({quantity: 1}));
        toast.success("Product has been added to the Cart!")


    }
    return(
        
        <div><button onClick={handleAddToCart} className='bg-black px-6 py-2 border rounded-lg text-white'>Add to cart</button></div>

    )
}


export default AddToCart;