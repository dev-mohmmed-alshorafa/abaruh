import React, { useEffect, useState } from 'react'
import Apiservices from '../../services/ApiServices'
import { useSelector } from 'react-redux'
import ProductProfile from './ProductProfile'
import { useParams } from 'react-router-dom'
import { Box, Stack } from '@mui/system'

import SmallProductH from '../Skeleton/SmallProductH'

function ProductsProfile({ list, setList }) {
  const [products, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const user = useSelector((state) => state.user)
  const params = useParams()
  useEffect(() => {
    setIsLoading(true)
    if (user) {
      Apiservices.get(`/product?merchant=${params.id}`).then((res) => {
        setProduct(res.data.data)
        setIsLoading(false)
      })
    }
  }, [user])
  if (isLoading) {
    return (
      <Stack  gap="10px" mt={5}>
        <SmallProductH />
        <SmallProductH />
        <SmallProductH />
        <SmallProductH />
      </Stack>
    )
  }
  return (
    <div className={list ? 'grid-items' : 'list-items'}>
      {products.map((e, i) => (
        <ProductProfile list={list} setList={setList} product={e} key={e._id} />
      ))}
    </div>
  )
}

export default ProductsProfile
