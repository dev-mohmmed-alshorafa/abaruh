import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useOutsideClick from '../../hook/UseOutsideClick'
import './merchantProduct.css'
import Apiservices from '../../services/ApiServices'
function MerchantProduct({ product }) {
  const [isShow, setIsShow] = useState(false)
  const [updateImg, setUpdateImg] = useState('')
  const [myProduct, setMyProduct] = useState(product)
  const [isUpdate, setIsUpdate] = useState(product)
  const handelUpdate = (e) => {
    e.preventDefault()
    const newData = new FormData()
    newData.append('description', isUpdate.description)
    newData.append('name', isUpdate.name)
    newData.append('price', isUpdate.price)
    newData.append('image', updateImg)

    Apiservices.put(`/product/${myProduct._id}`, newData).then((res) => {
      setMyProduct(res.data.data)
      setIsShow(false)
    })
  }
  const handleClickOutside = () => {
    setIsShow(false)
  }
  const openEditForm = () => {
    setIsShow(true)
  }
  const ref = useOutsideClick(handleClickOutside)

  return (
    <div className="product">
      <Link>
        <img style={{ width: '100px' }} src={myProduct.imageProduct} alt="" />
        <h3 className="name">{myProduct.name}</h3>
        <p className="describtion">{myProduct.description}</p>
        <p className="price">{myProduct.price} SAR</p>
      </Link>
      <div className={isShow ? 'edit-form-countier' : ''}>
        <div style={{ height: 0 }} ref={ref}>
          <img
            onClick={openEditForm}
            id="edit-product"
            src="./icons/pencl.png"
            alt=""
          />
          {isShow && (
            <form onSubmit={handelUpdate}>
              <input
                value={isUpdate.name}
                onChange={(e) =>
                  setIsUpdate({ ...isUpdate, name: e.target.value })
                }
                placeholder="Name Product"
                type="text"
              />
              <input
                value={isUpdate.price}
                onChange={(e) =>
                  setIsUpdate({ ...isUpdate, price: e.target.value })
                }
                placeholder="Price"
                type="number"
              />
              <textarea
                value={isUpdate.description}
                onChange={(e) =>
                  setIsUpdate({ ...isUpdate, description: e.target.value })
                }
                placeholder="Description "
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>

              <label className="updateImg" htmlFor="updateImg">
                <p></p>
                <p> Update Image</p>
                <img src="./icons/addimage.png" alt="" />
              </label>
              <input
                type="file"
                style={{ display: 'none' }}
                name=""
                onChange={(e) => setUpdateImg(e.target.files[0])}
                id="updateImg"
              />
              <button>Update</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default MerchantProduct
