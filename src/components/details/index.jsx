import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './details.css'
import ColorsProduct from './ColorsProduct'
import Details from './Details'
import Reviews from './Reviews'
import useOutsideClick from '../../hook/UseOutsideClick';
import SuccsessText from './SuccsessText'
import { useDispatch } from 'react-redux'
import { actions } from '../../Redux'

function DetailsProduct() {
  const [isActive,setIsActive]=useState(0)
  const [isAdd,setIsAdd]=useState(false)
  const product ={
    id:0,
    name:'Woman Ring',
    describtion:`Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
   `,
      img:'./products/ring.png',
      price:100
  }
  const dispatch=useDispatch()

  const handleClickOutside = () => {
    setIsAdd(false)

  };
  const addSuccsess=()=>{
    setIsAdd(true)
    dispatch(actions.addToCart(product))
    dispatch(actions.addition(product.price))
  }
  const ref = useOutsideClick(handleClickOutside);

  return (
    <div  >
      
      <Link className='back' to={'/'}>
        <img  src="./back.png" alt="" />
      </Link>
      <div className='details-one-product'>
      <img className='details-product-img'  src={product.img} alt="" />
        <section>
          <div className='name-price'>
          <h3>
            {product.name}
          </h3>
          <p>
          {product.price} SAR
          </p>
          </div>
         
          <p className='product-describtion'>
          {product.describtion}
          </p>
          <div className='details-btn'>
          <button className={isActive===0?'active-btn-details':'btn-details'} onClick={()=>setIsActive(0)}>Product</button>
          <button className={isActive===1?'active-btn-details':'btn-details'} onClick={()=>setIsActive(1)}>Details</button>
          <button className={isActive===2?'active-btn-details':'btn-details'} onClick={()=>setIsActive(2)}>Reviews</button>
          </div>
          {
            isActive===0?<ColorsProduct/>:isActive===1?<Details/>:<Reviews/>
          }

          <div className={isAdd?'active-succsess':'succsess'}>
         
          <button style={{display:isAdd?'none':'block'}} ref={ref} onClick={addSuccsess} className='add-to-cart-product'>
            Add to cart
          </button>
          {
            isAdd&&    <SuccsessText/>

          }
          </div>
          <button style={{display:!isAdd?'none':'block'}}  onClick={addSuccsess} className='add-to-cart-product'>
            Add to cart
          </button>
        </section>
      </div>

      </div>
  )
}

export default DetailsProduct
