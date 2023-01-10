import React, { useEffect, useState } from 'react'
import Nav from '../components/nav'
import Swiper from '../components/swiper'
import Tabs from '../components/tabs'
import Products from '../components/products'
import Apiservices from '../services/ApiServices'
import { useSelector } from 'react-redux'
import MyProducts from '../components/myProducts'

function Home() {
  const [products, setProducts] = useState([])
  const [categoryId, setCategoryId] = useState('63b9a8a2b64c3cc3a87ca1b1')
  const [textSearch, setTextSearch] = useState('')
  const user = useSelector((state) => state.user)

  useEffect(() => {
    Apiservices.get(`/product?category=${categoryId}`).then((res) => {
      setProducts(res.data.data)
    })
  }, [categoryId])
  return (
    <div className="home">
      <Nav
        textSearch={textSearch}
        setTextSearch={setTextSearch}
        setProducts={setProducts}
      />
      {user && user.role === 'merchant' ? (
        <>
        <MyProducts/>
        </>
      ) : (
        <>
          <Swiper />
          <Tabs setCategoryId={setCategoryId} />
          {products.length !== 0 ? (
            <Products products={products} />
          ) : (
            <div className="notAvailable">
              <p>No products are currently available</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Home
