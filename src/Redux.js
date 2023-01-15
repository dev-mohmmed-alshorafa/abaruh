import { configureStore, createSlice } from '@reduxjs/toolkit'
const countSlice = createSlice({
  name: 'counter',
  initialState: {
    user: null,
    cart: [],

    checkOutCart: [],
    total: 0,
    address: '',
    payment: '',
    showForm:0,
    bell:false,
    isLoadingUser:false
  },
  reducers: {
    protect(state, action) {
      state.user = action.payload
    },
    addToCart(state, action) {
      state.cart = [...state.cart, action.payload]
    },
    addToCheckOutCart(state, action) {
      state.checkOutCart = [...state.checkOutCart, action.payload]
    },
    addition(state, action) {
      state.total += action.payload
    },
    subtraction(state, action) {
      state.total -= action.payload
    },
    zeroTotal(state, action) {
      state.total = 0
    },
    delete(state, action) {
      state.cart = state.cart.filter((e) => e._id !== action.payload)
    },
    deleteFromCheckOutCart(state, action) {
      state.checkOutCart = state.checkOutCart.filter(
        (e) => e._id !== action.payload,
      )
    },
    emptyCart(state, action) {
      state.cart = []
    },
    emptyCheckOutCart(state, action) {
      state.checkOutCart = []
    },
    addCheckOutCart(state, action) {
      state.checkOutCart = action.payload
    },
    addAddressId(state, action) {
      state.address = action.payload
    },
    addpayment(state, action) {
      state.payment = action.payload
    },
    logout(state, action){
      state.user = null
    },
    setShowForm(state, action){
      state.showForm = action.payload
    }
    ,
    showBell(state,action){
      state.bell = action.payload
    } ,
    showIsLoadingUser(state,action){
      state.isLoadingUser = action.payload
    }
  },
})
export const actions = countSlice.actions
const store = configureStore({
  reducer: countSlice.reducer,
})
export default store
