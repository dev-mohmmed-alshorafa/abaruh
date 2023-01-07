import React from 'react'
import Menu from './Menu'
import Logo from './Logo'
import Search from './Search'
import Cart from './Cart'
import './navbar.css'
import { useState } from 'react'

function Nav() {
  
  const [isSearch,setIsSearch]=useState('search')
  const [isStiacky,setIsStiacky]=useState(false)
  return (
    <main style={{position:!isStiacky?'sticky':'static'}}  className='navbar'>
      <Menu setIsStiacky={setIsStiacky} />
      <Logo isSearch={isSearch}/>
      <section className='search-cart'>
        <Search isSearch={isSearch} setIsSearch={setIsSearch}/>
        <Cart/>
      </section>
    </main>
  )
}

export default Nav
