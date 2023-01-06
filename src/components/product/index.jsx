import React from 'react'
import {  useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import { actions } from '../../Redux'

function Product({product}) {
  const cart=useSelector((state=>state.cart))

  const { t } = useTranslation();
  const dispatch=useDispatch()
const addToMyCart=()=>{
  if(!cart.find(e=>e.id===product.id)){
    dispatch(actions.addToCart(product))
    dispatch(actions.addition(product.price))

  }
}
  return (
    <div className='product'>
      <Link  to={`/product/${product.id}`}>
      <img style={{width:'100px'}} src={product.img} alt="" />
      <h3 className='name'>{product.name}</h3>
      <p className='describtion'>{product.describtion}</p>
      <p className='price'>{product.price} SAR</p>
      </Link>
      <button onClick={addToMyCart} >
    {t("cart")}
      </button>
    </div>
  )
}

export default Product
