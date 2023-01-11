import React, { useState } from 'react'
import SelectRef from './SelectRef'
import SuccsessText from '../details/SuccsessText'
import useOutsideClick from '../../hook/UseOutsideClick'

function AddProductForm({ formKind }) {
  const [category, setCategory] = useState('Category')
  const [size, setSize] = useState('Size')
  const [isAdd, setIsAdd] = useState(false)
  const handleClickOutside = () => {
    setIsAdd(false)
  }
  const addSuccsess = (Event) => {
    Event.preventDefault()
    setIsAdd(true)
  }
  const ref = useOutsideClick(handleClickOutside)
  return (
    <form onSubmit={addSuccsess} className="add-product-form">
      <input placeholder="File Name" type="text" />
      <textarea
        placeholder="Description"
        name=""
        id=""
        cols="30"
        rows="6"
      ></textarea>
      <SelectRef
        isChoose={category}
        setIsChoose={setCategory}
        data={['Bag', 'T-Shirt', 'Accessory']}
      />
      <SelectRef
        isChoose={size}
        setIsChoose={setSize}
        data={['L', 'XL', 'XXL']}
      />
      <input type="text" />
      <p className="products-images">Product Images </p>
      <section className="add-images-btns">
        <label htmlFor="img1">
          <img src="./icons/addimage.png" alt="" />
        </label>
        <input style={{ display: 'none' }} type="file" name="" id="img1" />
        <input style={{ display: 'none' }} type="file" name="" id="img2" />
        <label htmlFor="img2">
          <img src="./icons/addimage.png" alt="" />
        </label>
      </section>
      <div className={isAdd ? 'active-succsess' : 'succsess'}>
        <button
          style={{ display: isAdd ? 'none' : 'block' }}
          ref={ref}
          onClick={addSuccsess}
          className="add-to-cart-product"
        >
          {formKind}{' '}
        </button>
        {isAdd && <SuccsessText />}
      </div>
    </form>
  )
}

export default AddProductForm
