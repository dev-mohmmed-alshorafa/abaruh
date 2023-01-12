import React from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../../Redux'

function ConfirmMassage({ setIsActiveMassage, product }) {
  const dispatch = useDispatch()
  const handelConfirm = () => {
    setIsActiveMassage(false)
    dispatch(actions.emptyCheckOutCart())
    dispatch(actions.emptyCart())
    dispatch(actions.zeroTotal())
    dispatch(actions.addition(product.price))
    dispatch(actions.addToCart({ ...product, total: product.price, quantity: 1 }))
  }
  const handelCancel = () => {
    setIsActiveMassage(false)
  }
  return (
    <div className="confirm-massage">
      <h3>Start a new cart?</h3>
      <p>When starting a new request, All items in the cart will be deleted</p>
      <div>
        <button onClick={handelConfirm}>Confirm</button>
        <button onClick={handelCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default ConfirmMassage
