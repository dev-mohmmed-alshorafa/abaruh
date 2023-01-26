import React, { useState } from 'react'
import HeaderAddProduct from './HeaderAddProduct'
import './addProduct.css'
import CreatePDBtns from './CreatePDBtns'
import AddProductForm from './AddProductForm'
import AddDesign from './AddDesign'
import Loading from '../signLoading'
function AddNewProduct() {
  const [isAddProduct, setIsAddProduct] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div>
      <HeaderAddProduct
        isAddProduct={isAddProduct}
        setIsAddProduct={setIsAddProduct}
      />
      {isAddProduct === 0 ? (
        <CreatePDBtns setIsAddProduct={setIsAddProduct} />
      ) : isAddProduct === 1 ? (
        <AddProductForm setIsLoading={setIsLoading} formKind={'Add Product'} />
      ) : (
        <AddDesign setIsLoading={setIsLoading} formKind={'Publish Design'} />
      )}
      {isLoading && <Loading />}
    </div>
  )
}

export default AddNewProduct
