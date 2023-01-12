import React from 'react'
import Menu from './Menu'
import Logo from './Logo'
import Search from './Search'
import Cart from './Cart'
import './navbar.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Nav({ textSearch, setTextSearch, setProducts }) {
  const user = useSelector((state) => state.user)

  const [isSearch, setIsSearch] = useState('search')
  const [isStiacky, setIsStiacky] = useState(false)
  return (
    <main
      style={{ position: !isStiacky ? 'fixed' : 'static' }}
      className="navbar"
    >
      <Menu setIsStiacky={setIsStiacky} />
      <Logo isSearch={isSearch} />
      {user && user.role === 'merchant' ? (
        <Link to={`/store/${user._id}`}>
          <img
            style={{ width: '25px', marginLeft: '25px' }}
            src="./icons/store.png"
            alt=""
          />
        </Link>
      ) : (
        <section className="search-cart">
          <Search
            textSearch={textSearch}
            setProducts={setProducts}
            setTextSearch={setTextSearch}
            isSearch={isSearch}
            setIsSearch={setIsSearch}
          />
          <Cart />
        </section>
      )}
    </main>
  )
}

export default Nav
