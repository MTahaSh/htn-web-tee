import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { actions } from 'use-shopping-cart';



export interface cartState {
  items: Array<any>;
  totalAmount: number;
  totalQuantity: number;
}

const initialState: cartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state: cartState,action:PayloadAction<{product:any; quantity: number, price:number}> ) => {
      const { quantity } = action.payload; 
      const newProduct = action.payload.product;
      const alreadyExistingProduct = state.items.find((item)=> item._id === newProduct._id);
      
      state.totalQuantity += action.payload.quantity;
      state.totalAmount += action.payload.quantity * action.payload.product.price;



      if(!alreadyExistingProduct)
      {
        const totalPrice = newProduct.price * action.payload.quantity;
        state.items.push({
          ...newProduct,
          quantity,
          totalPrice,
        });
      }
      else 
      {
        const totalPrice = alreadyExistingProduct.totalPrice + alreadyExistingProduct.price * action.payload.quantity;

        alreadyExistingProduct.quantity += action.payload.quantity;
        alreadyExistingProduct.totalPrice = totalPrice;

      }
      
    },
    removeFromCart: (state: cartState, action:PayloadAction<string>) => {
      
      const productId = action.payload;
  const existingProductIndex = state.items.findIndex((item) => item._id === productId);

  if (existingProductIndex !== -1) {
    const existingProduct = state.items[existingProductIndex];

    state.totalQuantity -= existingProduct.quantity;
    state.totalAmount -= existingProduct.totalPrice;
    state.items.splice(existingProductIndex, 1);

    if(state.totalQuantity === 0)
    {
      state.totalAmount = 0;
    }
  }
 

      
    },
    updateQuantity: (state: cartState, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find((item) => item._id === productId);

      if (item) {
        const quantityDifference = quantity - item.quantity;
        const priceDifference = item.price * quantityDifference;

        item.quantity = quantity;
        item.totalPrice += priceDifference;

        state.totalQuantity += quantityDifference;
        state.totalAmount += priceDifference;
      }
    },

    incrementQuantity: (state: cartState, action: PayloadAction<{productId: string; quantity: number}>) => {
      const productId = action.payload;
      const item = state.items.find((item) => item._id === productId);

      if (item) {
        item.quantity += 1;
        item.totalPrice += item.price;
        state.totalQuantity += 1;
        
      }
      
    },
    decrementQuantity: (state: cartState, action: PayloadAction<{productId: string; quantity: number}>) => {
      const productId = action.payload;
      const item = state.items.find((item) => item._id === productId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice -= item.price;
        state.totalQuantity -= 1;
      }
    },

    clearCart: (state) => {
      state = initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions;

export default cartSlice.reducer