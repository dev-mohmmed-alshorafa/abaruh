import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../Redux'
import useOutsideClick from '../../hook/UseOutsideClick'
import ConfirmMassage from '../products/ConfirmMassage'
import { Link } from 'react-router-dom'

function ProductProfile({ product, list, setList }) {
  const user = useSelector((state) => state.user)
  const cart = useSelector((state) => state.cart)
  const [isActiveMassage, setIsActiveMassage] = useState(false)

  const dispatch = useDispatch()

  const handelAddToCart = () => {
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
        console.log(2222)
      }
    }
  }
  const handleClickOutside = () => {
    setIsActiveMassage(false)
  }
  const ref = useOutsideClick(handleClickOutside)

  return (
    <div
      className={
        list ? 'grid-item profile-product' : 'list-item profile-product'
      }
    >
      <Link to={`/product/${product._id}`}  className={
        list ? 'grid-item profile-product' : 'list-item profile-product'
      }>
        <img src={product.imageProduct} alt="" />
        <section>
          <h3 className="name">{product.name}</h3>
          <p style={{ padding: 0 }} className="describtion">
            {product.description}
          </p>
          <p className="price">{product.price} SAR</p>
        </section>
      </Link>
      <div>
        <div className={isActiveMassage ? 'active-massage-in-profile' : ''}>
          <div ref={ref}>
            {user && user.role === 'merchant' ? (
              ''
            ) : list ? (
              <button
                onClick={handelAddToCart}
                className="add-product-from-store"
              >
                Add To Cart {isActiveMassage && 'kkkk'}
              </button>
            ) : (
              <img
                style={{ display: isActiveMassage && 'none' }}
                onClick={handelAddToCart}
                className="add-product-from-store-icon"
                src="./icons/addcart.png"
                alt=""
              />
            )}
            {isActiveMassage && (
              <ConfirmMassage
                product={product}
                setIsActiveMassage={setIsActiveMassage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductProfile
