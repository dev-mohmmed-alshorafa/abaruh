import React, { useEffect, useState } from 'react'
import SwiperBtns from './SwiperBtns'
import './swiper.css'
import SliderImages from './SliderImages'
const swipImg=['./swiper/Diamond.png',
'https://img.freepik.com/free-photo/beautiful-engagement-ring-with-diamonds_23-2149509236.jpg?w=2000',
'https://img.freepik.com/free-photo/beautiful-engagement-ring-with-diamonds_23-2149509244.jpg?w=2000']
function Swiper() {
const[isActive,setIsActive]=useState(swipImg.length-1)
useEffect(()=>{
setInterval(()=>{
  setIsActive((pre)=>pre+1)
},10000)
},[])
  return (
    <div className='swiper'>
      <SliderImages isActive={isActive} swipImg={swipImg} />
      <SwiperBtns isActive={isActive} setIsActive={setIsActive}/>
    </div>
  )
}

export default Swiper
