import React, { useEffect, useState } from 'react'
import Apiservices from '../../services/ApiServices'
import { useSelector } from 'react-redux'
import Products from '../products'
import './myProducts.css'
import { Link } from 'react-router-dom'
import SmallProducts from '../Skeleton/SmallProducts'
import { Box } from '@mui/system'
import { useTranslation } from 'react-i18next'

function MyProducts() {
  const [products, setProduct] = useState([])
  const user = useSelector((state) => state.user)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    if (user) {
      Apiservices.get(`/product?merchant=${user._id || user.id}`).then(
        (res) => {
          setProduct(res.data.data)
          setIsLoading(false)
        },
      )
    }
  }, [user])
  const { t } = useTranslation()

  return (
    <div className="my-products">
      <section className="add-product-btn">
        <p>{t("myproduct")}</p>
        <Link to="/add-product">{t("addproduct")}</Link>
      </section>
      {isLoading ? (
        <Box mt={20}>
          <SmallProducts />
        </Box>
      ) : (
        <section>
          <Products products={products} />
        </section>
      )}
    </div>
  )
}

export default MyProducts
