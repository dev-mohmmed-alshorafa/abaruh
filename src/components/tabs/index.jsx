import React, { useState } from 'react'
import './tabs.css'
import {  useTranslation } from "react-i18next";
import Product from '../product';

const filters=[{
  img:'./filters/tshirt.png',
  activeIme:'./filters/tshirtB.png',
  name:"Apparel"
},{
  img:'./filters/shoes.png',
  activeIme:'./filters/shoesB.png',
  name:"Shoes"
},{
  img:'./filters/face.png',
  activeIme:'./filters/faceB.png',
  name:"Faces"

},{
  img:'./filters/home.png',
  activeIme:'./filters/homeB.png',
  name:"home"

},{
  img:'./filters/couch.png',
  activeIme:'./filters/couchB.png',
  name:'Furniture'

},{
  img:'./filters/couch.png',
  activeIme:'./filters/couchB.png',
  name:'Furniture'

},{
  img:'./filters/couch.png',
  activeIme:'./filters/couchB.png',
  name:'Furniture'

}]

function Tabs() {
  const [tabs,setTabs]=useState(0)

  const getCategory=(i)=>{
    setTabs(i)
  }
  return (
    <div className='tabs'>
      {filters.map((e,i)=>  <div onClick={()=>getCategory(i)} className='tab' key={i}>
          <img style={{background:i!==tabs?'linear-gradient(153.43deg, #3351A6 16.67%, #4265C9 100%)':"#ffff"}}
           src={i===tabs?e.activeIme:e.img} alt="" />
           <h3 className='name-tab'>{e.name}</h3>
        </div>)
      
      }
    </div>
  )
}

export default Tabs
