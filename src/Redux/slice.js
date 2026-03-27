import { createSlice } from "@reduxjs/toolkit";

const getCartFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("cart");

    if (!data || data === "undefined") return [];

    return JSON.parse(data);
  } catch (error) {
    console.error("Invalid JSON in localStorage", error);
    return [];
  }
};

const initialState = {
    // value: 0,
    items: getCartFromLocalStorage()
}

const addToCart = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem:(state, action)=>{
            const itemExist = state.items.find(
                (cartItem) => cartItem.id == action.payload.id
            );

            if(itemExist){
                itemExist.quantity += 1;
            }else{
                state.items.push({...action.payload, quantity: 1})
            }
            //state.value += 1;
            
        },
        removeItem:(state, action)=>{
             const itemExist = state.items.find(
                (cartItem) => cartItem.id == action.payload.id
            );

            if(itemExist){
                if(itemExist.quantity > 1){
                      itemExist.quantity -= 1;
                }else{
                    state.items = state.items.filter(
                        (item) => item.id !== action.payload.id
                    );
                }
                
            }

            
        },

        removeItemFromCart:(state, action)=>{
             const itemExist = state.items.find(
                (cartItem) => cartItem.id == action.payload.id
            );

            if(itemExist){
                state.items = state.items.filter(
                    (item) => item.id !== action.payload.id
                );
            }

            
        },

        clearItem:(state)=>{
            state.items = [];
        }
    }
});

export const { addItem, removeItem, clearItem, removeItemFromCart } = addToCart.actions;

export default addToCart.reducer;