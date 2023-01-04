import {configureStore,createSlice} from '@reduxjs/toolkit'
const countSlice=createSlice({
  name:'counter',
  initialState:{
    count:{
      id:0
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