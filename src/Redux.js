import {configureStore,createSlice} from '@reduxjs/toolkit'
const countSlice=createSlice({
  name:'counter',
  initialState:{
    user:{
      id:1,
      name:'mohmmed alabdullah',
      email:'mohmmedalshorafa@gmail.com',
      img:null
    }
  },
  reducers:{
    inc(state,action){
state.count.id=5
    },
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