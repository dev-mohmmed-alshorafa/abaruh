import React from 'react'

function OneAddress({address}) {
  return (
    <div className='one-address'>
      <div className='address-name'>
        <p className='empty-p'></p>
        <p className='address-name-text'>{address.name}</p>
      </div>
      <div className='address-icons'>
      <img src="./icons/pencil.png" alt="" />
      <img src="./icons/delete.png" alt="" />
      </div>
    </div>
  )
}

export default OneAddress
