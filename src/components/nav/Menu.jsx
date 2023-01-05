import React from 'react'
import useOutsideClick from '../../hook/UseOutsideClick';
import Elements from './ElementsNavBar';
import { useState } from 'react';
function Menu() {
  const [isActive,setIsActive]=useState({
    elementsNav:'elements-nav',
    menu:'menu',
    items:'items'

  })
  const handleClickOutside = () => {
    setIsActive({
      elementsNav:'elements-nav',
    menu:'menu',
    items:'items'
    })
  };
  const showMenu=()=>{
    setIsActive({
      elementsNav:'elements-nav-active',
    menu:'menu-active',
    items:'items-Active'

    })
  }
  const ref = useOutsideClick(handleClickOutside);

  return (
    <div className='mune-Item' >

    <div>
    <div className={isActive.elementsNav}>
<div ref={ref}>
    <button onClick={showMenu}>
      <img src="./icons/menu.png" alt="" />
    </button>
    <Elements items={isActive.items} menu={isActive.menu}/>
    </div>
    </div>
    </div>
    </div>


  )
}

export default Menu
