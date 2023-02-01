import React, { useEffect, useState } from 'react'
import Apiservices from '../../services/ApiServices'
import useOutsideClick from '../../hook/UseOutsideClick'
import AddressValid from '../../validation/Address'
import { toast } from 'react-toastify'
function OneAddress({ address, allAddress, setAllAddress }) {
  const [isUpDate, setIsUpdate] = useState(false)
  const handelDeleteAddress = () => {
    Apiservices.delete(`/address/${address._id}`).then(() =>
      setAllAddress(allAddress.filter((e) => e._id !== address._id)),
    )
  }
  const [myAddreass,setMyAddress]=useState(address)
  const [addressForm, setAddressForm] = useState(address)
  const handleClickOutside = () => {
    setIsUpdate(false)
  }
  const openEdit = () => {
    setIsUpdate(true)
  }
  const handelEdit= async(e)=>{
    setIsUpdate(false)
e.preventDefault()
try{
  const vaild= await AddressValid.validate(addressForm)
  Apiservices.put(`/address/${address._id}`,addressForm).then(()=>setMyAddress(addressForm))

}catch(err){
  toast.error(err.message)

}


  }
  const ref = useOutsideClick(handleClickOutside)

  return (
    <div className="one-address">
      <div className="address-name">
        <p className="empty-p"></p>
        <p className="address-name-text">{myAddreass.addressName}</p>
      </div>
      <div className="address-icons">
        <div className={isUpDate ? 'active-edit' : ''}>
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            ref={ref}
          >
            <img
              style={{ display: !isUpDate ? 'flex' : 'none',cursor:'pointer' }}
              onClick={openEdit}
              src="./icons/pencil.png"
              alt=""
            />

            <form onSubmit={handelEdit}
              className="edit-address-form"
              style={{ display: isUpDate ? 'flex' : 'none' }}
            >
              <p>Update Address</p>
              <input
                placeholder="Address Name"
                value={addressForm.addressName}
                onChange={(e) =>
                  setAddressForm({
                    ...addressForm,
                    addressName: e.target.value,
                  })
                }
                type="text"
                required
              />
              <input
                placeholder="Address"
                value={addressForm.address}
                onChange={(e) =>
                  setAddressForm({ ...addressForm, address: e.target.value })
                }
                type="text"
                required
              />
              <input
                placeholder="City"
                value={addressForm.city}
                onChange={(e) =>
                  setAddressForm({ ...addressForm, city: e.target.value })
                }
                type="text"
                required
              />
              <button>Update</button>
            </form>
          </div>
        </div>
        <img onClick={handelDeleteAddress} style={{cursor:'pointer'}} src="./icons/delete.png" alt="" />
      </div>
    </div>
  )
}

export default OneAddress
