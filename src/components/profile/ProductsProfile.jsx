import React, { useEffect, useState } from 'react'
import Apiservices from '../../services/ApiServices'
import { useSelector } from 'react-redux'
import ProductProfile from './ProductProfile'
import { useParams } from 'react-router-dom'

function ProductsProfile({ list, setList }) {
  const [products, setProduct] = useState([])
  const user = useSelector((state) => state.user)
  const params=useParams()
  useEffect(() => {
    if (user) {
      Apiservices.get(`/product?merchant=${params.id}`).then((res) => {
        setProduct(res.data.data)
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
