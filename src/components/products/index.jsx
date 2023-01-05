import React from 'react'
import Product from '../product'
import './products.css'
function Products({products}) {
  return (
    <div className='products-section'>
      <h4>
        New Proudacts
      </h4>
      <div className='products'>
        {
          products.map(e=> <Product key={e.id} product={e}/> )
        }
      </div>
      
    </div>
  )
}

export default Products
