import React from 'react'
import {  useTranslation } from "react-i18next";

function Product({product}) {
  const { t } = useTranslation();

  return (
    <div className='product'>
      <img style={{width:'100px'}} src={product.img} alt="" />
      <h3 className='name'>{product.name}</h3>
      <p className='describtion'>{product.describtion}</p>
      <p className='price'>{product.price} SAR</p>
      <button>{t("cart")}</button>
    </div>
  )
}

export default Product
