import {configureStore,createSlice} from '@reduxjs/toolkit'
const countSlice=createSlice({
  name:'counter',
  initialState:{
    user:{
      id:1,
      name:'mohmmed alabdullah',
      email:'mohmmedalshorafa@gmail.com',
      img:null
    },
    cart:[],
    total:0
  },
  reducers:{
    inc(state,action){
state.count.id=5
    },
    addToCart(state,action){
      state.cart=[...state.cart,action.payload]
    },
    addition(state,action){
      state.total+=action.payload
    },
    subtraction(state,action){
      state.total-=action.payload
    },
    delete(state,action){
      state.cart=state.cart.filter(e=>e.id !==action.payload)
    }
//     dec(state,action){
// state.count+=action.payload
//     }
  }
})
export const actions=countSlice.actions;
const store=configureStore({
  reducer:countSlice.reducer
})
export default store