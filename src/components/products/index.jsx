import React, { useState } from 'react'
import Product from '../product'
import './products.css'
import { useSelector } from 'react-redux'
import MerchantProduct from '../merchantProduct'
function Products({ products }) {
  const user = useSelector((state) => state.user)

  return (
    <div className="products-section">
      {user && user.role === 'merchant' ? '' : <h4>New Proudacts</h4>}

      <div className="products">
        {user && user.role === 'merchant'
          ? products.map((e) => <MerchantProduct key={e._id} product={e} />)
          : products.map((e) => (
              <Product
                key={e._id}
                product={e}
              />
            ))}
     
      </div>
    </div>
  )
}

export default Products
