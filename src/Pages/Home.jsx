import React, { useEffect, useState } from 'react'
import Nav from '../components/nav'

import Apiservices from '../services/ApiServices'
import { useDispatch, useSelector } from 'react-redux'
import MyProducts from '../components/myProducts'
import HomeForUser from '../components/HomeForUser'
import { actions } from '../Redux'
import LoadingHome from '../components/Skeleton/LoadingHome'

function Home() {
  const [products, setProducts] = useState([])
  const [categoryId, setCategoryId] = useState('63b9a8a2b64c3cc3a87ca1b1')
  const [textSearch, setTextSearch] = useState('')
  const user = useSelector((state) => state.user)
  const isLoadingUser = useSelector((state) => state.isLoadingUser)
  const dispatch = useDispatch()

  const [isloading, setIsLoading] = useState(false)
  useEffect(() => {
    dispatch(actions.showBell(false))
  }, [])
  useEffect(() => {
    setIsLoading(true)
    Apiservices.get(`/product?category=${categoryId}`).then((res) => {
      setProducts(res.data.data)
      setIsLoading(false)
    })
  }, [categoryId])
  return (
    <div className="home">
      <Nav
        setIsLoading={setIsLoading}
        textSearch={textSearch}
        setTextSearch={setTextSearch}
        setProducts={setProducts}
      />
      {isLoadingUser ? 
        <LoadingHome/>
       : user && user.role === 'merchant' ? (
        <>
          <MyProducts />
        </>
      ) : (
        <HomeForUser
          isloading={isloading}
          products={products}
          setCategoryId={setCategoryId}
        />
      )}
    </div>
  )
}

export default Home
