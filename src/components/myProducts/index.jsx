import React, { useEffect, useState } from 'react'
import Apiservices from '../../services/ApiServices'
import { useSelector } from 'react-redux'
import Products from '../products'
import './myProducts.css'
import { Link } from 'react-router-dom'
function MyProducts() {
  const [products, setProduct] = useState([])
  const user = useSelector((state) => state.user)

  useEffect(() => {
    if (user) {
      Apiservices.get(`/product?merchant=${user._id||user.id}`).then((res) => {
        setProduct(res.data.data)
      })
    }
  }, [user])
  return (
    <div className="my-products">
      <section className="add-product-btn">
        <p>My Product</p>
        <Link to="/add-product">Add Product</Link>
      </section>
      <section>
        <Products products={products} />
      </section>
    </div>
  )
}

export default MyProducts
