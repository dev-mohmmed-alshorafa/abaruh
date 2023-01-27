import React from 'react'
import Swiper from '../swiper'
import Tabs from '../tabs'
import Products from '../products'
import SmallProducts from '../Skeleton/SmallProducts'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

function HomeForUser({products,setCategoryId,isloading}) {
  const user=useSelector(state=>state.user)
  const { t } = useTranslation()
  return (
    <>
       <Swiper />
          <Tabs setCategoryId={setCategoryId} />
          {user && user.role === 'merchant' ? '' : <h4 className='new-products'>{t('newproudacts')}</h4>}

          {isloading?<SmallProducts/> :products.length !== 0 ? (
            <Products products={products} />
          ) : (
            <div className="notAvailable">
              <p>{t('noproducts')}</p>
            </div>
          )}
    </>
  )
}

export default HomeForUser
