import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../../Redux'

function Product({ product }) {
  const cart = useSelector((state) => state.cart)
  const user = useSelector((state) => state.user)

  const { t } = useTranslation()
  const dispatch = useDispatch()
  const addToMyCart = () => {
    if (!cart.find((e) => e._id === product._id)) {
      dispatch(
        actions.addToCart({ ...product, total: product.price, quantity: 1 }),
      )
      dispatch(actions.addition(product.price))
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
      <button
        style={{ display: user && user.role === 'merchant' && 'none' }}
        onClick={addToMyCart}
      >
        {t('cart')}
      </button>
      {user && user.role === 'merchant' && (
        <img id="edit-product" src="./icons/pencl.png" alt="" />
      )}
    </div>
  )
}

export default Product
