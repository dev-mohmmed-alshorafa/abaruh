import React from 'react'
import Menu from './Menu'
import Logo from './Logo'
import Search from './Search'
import Cart from './Cart'
import './navbar.css'
import { useState } from 'react'

function Nav() {
  
  const [isSearch,setIsSearch]=useState('search')

  return (
    <main className='navbar'>
      <Menu/>
      <Logo isSearch={isSearch}/>
      <section className='search-cart'>
        <Search isSearch={isSearch} setIsSearch={setIsSearch}/>
        <Cart/>
      </section>
    </main>
  )
}

export default Nav
