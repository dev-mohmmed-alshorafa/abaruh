import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { actions } from '../../Redux'
function Index() {
  const dispatch = useDispatch()
  const isAddress = useSelector((e) => e.isAddress)

  return (
    <div className="address-header">
      {!isAddress ? (
        <Link to={'/'}>
          {' '}
          <img style={{width:'25px'}} src="./back.png" alt="" />
        </Link>
      ) : (
        <div
          onClick={() => dispatch(actions.setIsAddress(false))}
          className="backToHome"
        >
          <img src="./back.png" alt="" />
        </div>
      )}

      <p>Add Address</p>
      <div className="empty-div"></div>
    </div>
  )
}

export default Index
