import React from 'react'
import {  useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

function Product({product}) {
  const { t } = useTranslation();

  return (
    <div className='product'>
      <img style={{width:'100px'}} src={product.img} alt="" />
      <h3 className='name'>{product.name}</h3>
      <p className='describtion'>{product.describtion}</p>
      <p className='price'>{product.price} SAR</p>
      <Link to={`/product/${product.id}`}>
    {t("cart")}
      </Link>
    </div>
  )
}

export default Product
