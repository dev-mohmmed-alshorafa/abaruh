import React from 'react'
import Product from '../product'
import './products.css'
import { useSelector } from 'react-redux'
function Products({ products }) {
  const user = useSelector((state) => state.user)

  return (
    <div className="products-section">
      {user && user.role === 'merchant' ? '' : <h4>New Proudacts</h4>}

      <div className="products">
        {products.map((e) => (
          <Product key={e._id} product={e} />
        ))}
      </div>
    </div>
  )
}

export default Products
