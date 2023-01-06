import React from 'react'
import EmptyBox from '../components/emptyBox'
import MyCart from '../components/cart'

import { useSelector } from 'react-redux'
function Cart() {
  const cart=useSelector((state=>state.cart))
  if(cart.length===0){
    return  <EmptyBox/>
  }
  return (
    <div>
      <MyCart/>
    </div>
  )
}

export default Cart
