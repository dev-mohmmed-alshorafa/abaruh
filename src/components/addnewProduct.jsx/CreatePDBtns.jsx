import React from 'react'

function CreatePDBtns({setIsAddProduct}) {
  return (
    <div className='create-product-btns'>
      <button onClick={()=>setIsAddProduct(2)}>
        <img src="./icons/web.png" alt="" />
        <span>Create Design</span>
      </button>
      <button onClick={()=>setIsAddProduct(1)}>
        <img src="./icons/openbox.png" alt="" />
        <span>Add Product</span>

      </button>
      
    </div>
  )
}

export default CreatePDBtns
