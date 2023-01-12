import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../../Redux'
import useOutsideClick from '../../hook/UseOutsideClick'
import ConfirmMassage from '../products/ConfirmMassage'

function Product({ product }) {
  const cart = useSelector((state) => state.cart)
  const user = useSelector((state) => state.user)
  const [isActiveMassage, setIsActiveMassage] = useState(false)
  const handleClickOutside = () => {
    setIsActiveMassage(false)
  }
  const ref = useOutsideClick(handleClickOutside)

  const { t } = useTranslation()
  const dispatch = useDispatch()
  const addToMyCart = () => {
    if (!cart.find((e) => e._id === product._id)) {
      if (
        (cart[0] && cart[0].merchant === product.merchant) ||
        cart.length === 0
      ) {
        dispatch(
          actions.addToCart({ ...product, total: product.price, quantity: 1 }),
        )
        dispatch(actions.addition(product.price))
      } else {
        setIsActiveMassage(true)
      }
    }
  }
  return (
    <div className="product">
      <Link to={`/product/${product._id}`}>
        <img style={{ width: '100px' }} src={product.imageProduct} alt="" />
        <h3 className="name">{product.name}</h3>
        <p className="describtion">{product.description}</p>
        <p className="price">{product.price} SAR</p>
      </Link>
      <section className={isActiveMassage ? 'start-new-cart' : ''}>
        <div ref={ref}>
          {isActiveMassage && <ConfirmMassage product={product} setIsActiveMassage={setIsActiveMassage} />}
          <button
            style={{ display: isActiveMassage && 'none' }}
            onClick={addToMyCart}
          >
            {t('cart')}
          </button>
        </div>
      </section>

      {user && user.role === 'merchant' && (
        <img id="edit-product" src="./icons/pencl.png" alt="" />
      )}
    </div>
  )
}

export default Product
