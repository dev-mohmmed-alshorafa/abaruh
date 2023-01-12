import React, { useEffect, useState } from 'react'
import SelectRef from './SelectRef'
import SuccsessText from '../details/SuccsessText'
import useOutsideClick from '../../hook/UseOutsideClick'
import Apiservices from '../../services/ApiServices'

function AddProductForm({ formKind }) {
  const [category, setCategory] = useState({name:'Category',_id:0})
  const [getCategory, setGetCategory] = useState([])
  const [size, setSize] = useState({name:'Size',_id:0})
  const [isAdd, setIsAdd] = useState(false)
  useEffect(() => {
    Apiservices.get('/category').then((res) => {
      console.log(res.data.data)
      setGetCategory(res.data.data)
    })
  }, [])
  const handleClickOutside = () => {
    setIsAdd(false)
  }
  const [img, setImg] = useState('')
  const [newProduct, setNewProduct] = useState({
    name: '',
    image: '',
    description: '',
    price: '',
  })
  const addSuccsess = (Event) => {
    const newData = new FormData()
    newData.append('image', img)
    // newData.append('data', JSON.stringify(newProduct))
    newData.append('name', newProduct.name)
    newData.append('category', category._id)
    newData.append('Sizes', size.name)
    newData.append('Quantity', 11)
    newData.append('price', newProduct.price)
    newData.append('description', newProduct.description)
    newData.append('Industry', '11')

    Event.preventDefault()
    setIsAdd(true)
    Apiservices.post('/product', newData)
  }

  const ref = useOutsideClick(handleClickOutside)
  return (
    <form onSubmit={addSuccsess} className="add-product-form">
      <input
        placeholder="File Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        type="text"
      />
      <textarea
        value={newProduct.description}
        onChange={(e) =>
          setNewProduct({ ...newProduct, description: e.target.value })
        }
        placeholder="Description"
        name=""
        id=""
        cols="30"
        rows="6"
      ></textarea>
      <SelectRef
        isChoose={category}
        setIsChoose={setCategory}
        data={getCategory}
      />
      <SelectRef
        isChoose={size}
        setIsChoose={setSize}
        data={[{_id:"1",name:'L'},{_id:"2",name:'XL'}]}
      />
      <input
        type="number"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: e.target.value })
        }
      />
      <p className="products-images">Product Images </p>
      <section className="add-images-btns">
        <label htmlFor="img1">
          <img src="./icons/addimage.png" alt="" />
        </label>
        <input
          style={{ display: 'none' }}
          type="file"
          onChange={(e) => setImg(e.target.files[0])}
          name=""
          id="img1"
        />
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
