import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useOutsideClick from '../../hook/UseOutsideClick'
import './merchantProduct.css'
import Apiservices from '../../services/ApiServices'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Loading from '../signLoading'
import { toast } from 'react-toastify'
import ProductValid from '../../validation/Product'
function MerchantProduct({ product }) {
  const [isShow, setIsShow] = useState(false)
  const [updateImg, setUpdateImg] = useState('')
  const [myProduct, setMyProduct] = useState(product)
  const [isUpdate, setIsUpdate] = useState(product)
  const [isLoading,setIsLoading]=useState(false)
  const { t } = useTranslation()

  const handelUpdate = async(e) => {
    try {
      const vaild = await ProductValid.validate(isUpdate)
      e.preventDefault()
      const newData = new FormData()
      newData.append('description', isUpdate.description)
      newData.append('name', isUpdate.name)
      newData.append('price', isUpdate.price)
      newData.append('image', updateImg)
      setIsLoading(true)
      Apiservices.put(`/product/${myProduct._id}`, newData).then((res) => {
        setMyProduct(res.data.data)
        setIsLoading(false)
  
        setIsShow(false)
      })
    
    }catch (err) {
        toast.error(err.message)
      }
   
  }
  const handleClickOutside = () => {
    setIsShow(false)
  }
  const openEditForm = () => {
    setIsShow(true)
  }
  const ref = useOutsideClick(handleClickOutside)
const lng=useSelector(e=>e.lng)
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
            style={{right:lng==="en"?" -124px":"auto",left:lng!=="en"?" -124px":"auto"}}
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
                placeholder={t("nameproduct")}
                type="text"
              />
              <input
                value={isUpdate.price}
                onChange={(e) =>
                  setIsUpdate({ ...isUpdate, price: e.target.value })
                }
                placeholder={t("price")}
                type="number"
              />
              <textarea
                value={isUpdate.description}
                onChange={(e) =>
                  setIsUpdate({ ...isUpdate, description: e.target.value })
                }
                placeholder={t("description ")}
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>

              <label className="updateImg" htmlFor="updateImg">
                <p></p>
                <p> {t("updateimg")}</p>
                <img src="./icons/addimage.png" alt="" />
              </label>
              <input
                type="file"
                style={{ display: 'none' }}
                name=""
                onChange={(e) => setUpdateImg(e.target.files[0])}
                id="updateImg"
              />
              <button>{t("update")}</button>
              {isLoading &&<Loading/>}
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default MerchantProduct
