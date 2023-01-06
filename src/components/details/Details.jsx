import React from 'react'

function Details() {
  const detials={
    brand:'Van cleef',
    sku:'10245214532',
    conditions:'Brand new',
    materials:'Dimond'
  }
  return (
    <div>
      <section className='product-info'>
      <div>
          <h3>Brand</h3>
          <p>{detials.brand}</p>
        </div>
        <div className='mui-sku'>
          <h3>Sku</h3>
          <p>{detials.sku}</p>
        </div>
      </section>
      <section className='product-info'>
      <div>
          <h3>Conditions</h3>
          <p>{detials.conditions}</p>
        </div>
        <div className='mui-sku'>
          <h3>Materials</h3>
          <p>{detials.materials}</p>
        </div>
      </section>

      
    </div>
  )
}

export default Details
