import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[],
    },
    reducers: {
        //Action
        addItem:(state, action)=>{
            //Reducer function   
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            //Reducer function
            //we dont need action so we have not taken it as a parameter
            state.items.pop();
        },
        clearCart:(state, action)=>{
            //Reducer function
            state.items.length = 0; //[]
        },
    }
});

export const{addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;