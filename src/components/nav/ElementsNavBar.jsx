import React from 'react'
import Items from './Items'

function Elements({menu,items}) {
  return (
  <section className={menu} >
    <Items items={items}/>
      </section>
  
  )
}

export default Elements
