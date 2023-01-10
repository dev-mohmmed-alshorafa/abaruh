import React from 'react'

function ProductProfile({product,list, setList}) {

  return (
    <div className={list?'grid-item profile-product':'list-item profile-product'}>
      <img src={product.imageProduct} alt="" />
      <section>
      <h3 className="name">{product.name}</h3>
        <p style={{padding:0}} className="describtion">{product.description}</p>
        <p className="price">{product.price} SAR</p>
      </section>
      
    </div>
  )
}

export default ProductProfile
