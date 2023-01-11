import React, { useState } from 'react'
import HeaderAddProduct from './HeaderAddProduct'
import './addProduct.css'
import CreatePDBtns from './CreatePDBtns'
import AddProductForm from './AddProductForm'
function AddNewProduct() {
  const [isAddProduct,setIsAddProduct]=useState(0)
  return (
    <div>
      <HeaderAddProduct isAddProduct={isAddProduct} setIsAddProduct={setIsAddProduct}/>
      {isAddProduct===0? <CreatePDBtns setIsAddProduct={setIsAddProduct}/>
:isAddProduct===1?<AddProductForm formKind={'Add Product'}/>:<AddProductForm formKind={'Publish Design'}/>}
    </div>
  )
}

export default AddNewProduct
