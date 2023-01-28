import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { actions } from '../../Redux'
import Apiservices from '../../services/ApiServices'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
function TotalCheckout({ setIsDone, paymentWay,setIsLoading }) {
  const total = useSelector((state) => state.total)

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.checkOutCart)
  const addressId = useSelector((state) => state.address)
  const [cartItems, setCartItems] = useState(
    cart.map((e) => {
      return {
        productId: '',
        price: '',
        quantity: '',
        total: '',
      }
    }),
  )
  useEffect(() => {
    setCartItems(
      cart.map((e) => {
        return {
          productId: e._id,
          price: e.price,
          quantity: e.quantity,
          total: e.total,
        }
      }),
    )
  }, [])
  const { t } = useTranslation()

  return (
    <div className="total">
      <div className="total-text">
        <p onClick={() => console.log(cartItems)}>Total :</p>
        <p className="total-prices">{total} SAR</p>
      </div>
      <button
        onClick={() => {
          if (paymentWay) {
            setIsLoading(true)
            console.log({
              product: cartItems,
              total: total,
              address: addressId,
              payment: paymentWay,
            })
            Apiservices.post('/order', {
              product: cartItems,
              total: total,
              address: addressId,
              payment: paymentWay,
            }).then((res) => {
              setIsLoading(false)
              setIsDone(true)
              dispatch(actions.emptyCart())
              dispatch(actions.emptyCheckOutCart())
              dispatch(actions.zeroTotal())
            })
          }else{
            toast.error(t('addpaymentmsg'))
            setIsLoading(false)

          }
        }}
      >
        {t("checkout")}
      </button>
    </div>
  )
}

export default TotalCheckout
