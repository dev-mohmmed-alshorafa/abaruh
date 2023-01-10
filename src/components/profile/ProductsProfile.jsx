import React, { useEffect, useState } from 'react'
import Apiservices from '../../services/ApiServices'
import { useSelector } from 'react-redux'
import ProductProfile from './ProductProfile'

function ProductsProfile({ list, setList }) {
  const [products, setProduct] = useState([])
  const user = useSelector((state) => state.user)

  useEffect(() => {
    if (user) {
      Apiservices.get(`/product?merchant=${user._id}`).then((res) => {
        setProduct(res.data.data)
        console.log(res.data.data)
      })
    }
  }, [user])
  return (
    <div className={list?'grid-items':'list-items'}>
      {products.map((e, i) => (
        <ProductProfile list={list} setList={setList} product={e} key={e._id} />
      ))}
    </div>
  )
}

export default ProductsProfile
