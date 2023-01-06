import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { actions } from '../../Redux'

function CartItem({item}) {
  const dispatch=useDispatch()
  const [count,setCount]=useState(1)
  const add=()=>{
    dispatch(actions.addition(item.price))
    setCount(count+1)
  }
  const subtract =()=>{
    if(count!==1){
      setCount(count-1)
      dispatch(actions.subtraction(item.price))
    }
  }
  const deleteItem=()=>{
    dispatch(actions.subtraction(item.price * count))
    dispatch(actions.delete(item.id))
    

  }
  return (
    <div className='cart-item'>
      <div className='item-cart-info'>
      <img className='item-cart-img' src={item.img} alt="" />
      <div >
      <p className='name-item-cart'>{item.name}</p>
      <span className='price-item-cart'>{item.price} SAR</span>
      </div>
      </div>
      
      <div className='item-cart-count-delete'>
      <div className='count-item' >
        <img onClick={subtract} src="./icons/m.png" alt="" />
        <p>{count}</p>
        <img onClick={add} src="./icons/add.png" alt="" />
      </div>
      <img onClick={deleteItem} className='delete-icon' src="./icons/delete.png" alt="" />
    </div>
      </div>
     
  )
}

export default CartItem
