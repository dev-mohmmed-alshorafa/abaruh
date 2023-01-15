import React from 'react'
import Menu from './Menu'
import Logo from './Logo'
import Search from './Search'
import Cart from './Cart'
import './navbar.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Nav({ textSearch, setTextSearch, setProducts, setIsLoading }) {
  const user = useSelector((state) => state.user)
  const bell = useSelector((state) => state.bell)

  const [isSearch, setIsSearch] = useState('search')
  const [isStiacky, setIsStiacky] = useState(false)
  return (
    <main
      style={{ position: !isStiacky ? 'fixed' : 'static' }}
      className="navbar"
    >
      <Menu setIsStiacky={setIsStiacky} />
      <Logo isSearch={isSearch} />
      <div>
        {user && user.role === 'merchant' && bell && (
          <img style={{ width: '24px' }} src="./icons/bell.png" alt="" />
        )}
        {user && user.role === 'merchant' ? (
          <Link to={`/store/${user._id}`}>
            <img
              style={{ width: '25px', marginLeft: '11px' }}
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
              setIsLoading={setIsLoading}
              setIsSearch={setIsSearch}
            />
            <Cart />
          </section>
        )}
      </div>
    </main>
  )
}

export default Nav
