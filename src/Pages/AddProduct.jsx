import React from 'react'
import NotAvailable from './NotAvailable'
import { useSelector } from 'react-redux'
import AddNewProduct from '../components/addnewProduct.jsx'

function AddProduct() {
  const user = useSelector((state) => state.user)
  return (
    <div>
      {user && user.role === 'merchant' ? (
        <>
        <AddNewProduct/>
        </>
      ) : (
        <NotAvailable />
      )}
    </div>
  )
}

export default AddProduct
