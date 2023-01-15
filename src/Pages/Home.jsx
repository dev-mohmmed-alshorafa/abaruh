import React, { useEffect, useState } from 'react'
import Nav from '../components/nav'
import Swiper from '../components/swiper'
import Tabs from '../components/tabs'
import Products from '../components/products'
import Apiservices from '../services/ApiServices'
import { useSelector } from 'react-redux'
import MyProducts from '../components/myProducts'
import HomeForUser from '../components/HomeForUser'

function Home() {
  const [products, setProducts] = useState([])
  const [categoryId, setCategoryId] = useState('63b9a8a2b64c3cc3a87ca1b1')
  const [textSearch, setTextSearch] = useState('')
  const user = useSelector((state) => state.user)
const[isloading,setIsLoading]=useState(false)
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
      {user && user.role === 'merchant' ? (
        <>
        <MyProducts/>
        </>
      ) : (
        <HomeForUser isloading={isloading} products={products} setCategoryId={setCategoryId}/>
      )}
    </div>
  )
}

export default Home
