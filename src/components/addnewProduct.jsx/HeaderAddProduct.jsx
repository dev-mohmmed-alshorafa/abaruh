import React from 'react'
import { Link } from 'react-router-dom'

function HeaderAddProduct({ isAddProduct,setIsAddProduct }) {
  return (
    <div className='header-add-product'>
      {isAddProduct === 0 ? (
        <Link to='/'>
          <img src="./icons/arrowf.png" alt="" />
        </Link>
      ) : (
        <img onClick={()=>setIsAddProduct(0)} src="./icons/arrowf.png" alt="" />
      )}
      <p>{isAddProduct!==2?"Add Product":"Create Design"}</p>
      <div></div>
    </div>
  )
}

export default HeaderAddProduct
