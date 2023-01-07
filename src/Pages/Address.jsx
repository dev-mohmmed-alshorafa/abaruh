import React from 'react'
import AddressHeader from '../components/addressHeader'
import OneAddress from '../components/oneAddress'
function Address() {
  const address = [{ id: 1, name: 'Mohmmed ' },
  { id: 3, name: 'Hataki' },
  { id: 2, name: 'Kakashi' }]
  return (
    <div className="my-address">
      <AddressHeader />
      <div className='addresses'>
        {address.map((e) => (
          <OneAddress address={e} key={e.id} />
        ))}
      </div>
    </div>
  )
}

export default Address
