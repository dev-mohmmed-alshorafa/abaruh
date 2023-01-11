import React, { useState } from 'react'
import useOutsideClick from '../../hook/UseOutsideClick'

function SelectRef({ data, isChoose, setIsChoose }) {
  const [open, setOpen] = useState(false)
  const handleClickOutside = () => {
    setOpen(false)
  }
  const openSelect = () => {
    setOpen(true)
  }
  const ref = useOutsideClick(handleClickOutside)

  return (
    <div ref={ref}>
      <div
        style={{ borderRadius: !open && '20px' }}
        onClick={openSelect}
        className="label-select"
      >
        <p style={{color:data.includes(isChoose) &&'black'}}>{isChoose}</p>
        <img
          className={open ? 'open-select' : 'close-select'}
          src="./icons/darrow.png"
          alt=""
        />
      </div>
      {open && (
        <div className="options">
          {data.map((e, i) => (
            <div key={i}>
              <input
                type="radio"
                onChange={() => setIsChoose(e)}
                name={data[0]}
                id={e}
              />
              <label htmlFor={e}>{e}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectRef
