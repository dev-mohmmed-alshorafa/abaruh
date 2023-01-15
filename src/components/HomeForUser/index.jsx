import React from 'react'
import Swiper from '../swiper'
import Tabs from '../tabs'
import Products from '../products'
import SmallProducts from '../Skeleton/SmallProducts'
import { useSelector } from 'react-redux'

function HomeForUser({products,setCategoryId,isloading}) {
  const user=useSelector(state=>state.user)
  return (
    <>
       <Swiper />
          <Tabs setCategoryId={setCategoryId} />
          {user && user.role === 'merchant' ? '' : <h4 className='new-products'>New Proudacts</h4>}

          {isloading?<SmallProducts/> :products.length !== 0 ? (
            <Products products={products} />
          ) : (
            <div className="notAvailable">
              <p>No products are currently available</p>
            </div>
          )}
    </>
  )
}

export default HomeForUser
