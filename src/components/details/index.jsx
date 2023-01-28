import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './details.css'
import ColorsProduct from './ColorsProduct'
import Details from './Details'
import Reviews from './Reviews'
import useOutsideClick from '../../hook/UseOutsideClick'
import SuccsessText from './SuccsessText'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../Redux'
import { useParams } from 'react-router-dom'
import Apiservices from '../../services/ApiServices'
import ConfirmMassage from '../products/ConfirmMassage'
import BigProduct from '../Skeleton/BigProduct'
import { useTranslation } from 'react-i18next'

function DetailsProduct() {
  const [isActive, setIsActive] = useState(0)
  const [isAdd, setIsAdd] = useState(false)
  const [isActiveMassage, setIsActiveMassage] = useState(false)

  const params = useParams()
  const [product, setProduct] = useState({})
  const [isloading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    Apiservices(`/product?_id=${params.id}`).then((res) => {
      setProduct(res.data.data[0])
      setIsLoading(false)
    })
  }, [])
  const cart = useSelector((state) => state.cart)
  const user = useSelector((state) => state.user)

  const dispatch = useDispatch()

  const handleClickOutside = () => {
    setIsAdd(false)
    setIsActiveMassage(false)
  }
  const addSuccsess = () => {
    if (!cart.find((e) => e._id === product._id)) {
      if (
        (cart[0] && cart[0].merchant === product.merchant) ||
        cart.length === 0
      ) {
        setIsAdd(true)
        dispatch(
          actions.addToCart({ ...product, total: product.price, quantity: 1 }),
        )
        dispatch(actions.addition(product.price))
      } else {
        setIsActiveMassage(true)
        console.log(2222222)
      }
    }
  }
  const ref = useOutsideClick(handleClickOutside)
  const { t } = useTranslation()
const lng=useSelector(e=>e.lng)
  return (
    <div>
      <Link className="back" to={'/'}>
        <img style={{transform:lng==='ar' &&"rotateY(180deg)"}} src="./back.png" alt="" />
      </Link>
      {isloading ? (
        <BigProduct />
      ) : (
        <div className="details-one-product">
          <img
            className="details-product-img"
            src={product.imageProduct}
            alt=""
          />
          <section>
            <div className="name-price">
              <h3>{product.name}</h3>
              <p>{product.price} SAR</p>
            </div>

            <p className="product-describtion">{product.description}</p>
            <div className="details-btn">
              <button
                className={
                  isActive === 0 ? 'active-btn-details' : 'btn-details'
                }
                onClick={() => setIsActive(0)}
              >
                {t('product')}
              </button>
              <button
                className={
                  isActive === 1 ? 'active-btn-details' : 'btn-details'
                }
                onClick={() => setIsActive(1)}
              >
                {t('details')}
              </button>
              <button
                className={
                  isActive === 2 ? 'active-btn-details' : 'btn-details'
                }
                onClick={() => setIsActive(2)}
              >
                {t('reviews')}
              </button>
            </div>
            {isActive === 0 ? (
              <ColorsProduct />
            ) : isActive === 1 ? (
              <Details />
            ) : (
              <Reviews />
            )}

            <div>
              <section
                className={
                  isActiveMassage
                    ? 'active-confirm'
                    : isAdd
                    ? 'active-succuss-msg'
                    : 'any'
                }
              >
                {user && user.role == 'merchant' ? (
                  ''
                ) : (
                  <div style={{ width: '100%' }} ref={ref}>
                    <button
                      style={{
                        display: isAdd || isActiveMassage ? 'none' : 'block',
                      }}
                      onClick={addSuccsess}
                      className="add-to-cart-product"
                    >
                     {t("cart")}
                    </button>
                    <div>
                      {isActiveMassage && (
                        <ConfirmMassage
                          product={product}
                          setIsActiveMassage={setIsActiveMassage}
                        />
                      )}
                      {isAdd && <SuccsessText />}
                    </div>
                  </div>
                )}
              </section>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default DetailsProduct
