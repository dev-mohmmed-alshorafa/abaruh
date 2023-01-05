import React, { useState } from 'react'
import SwiperBtns from './SwiperBtns'
import './swiper.css'
import SliderImages from './SliderImages'
const swipImg=['./swiper/Diamond.png',
'https://img.freepik.com/free-photo/beautiful-engagement-ring-with-diamonds_23-2149509236.jpg?w=2000',
'https://img.freepik.com/free-photo/beautiful-engagement-ring-with-diamonds_23-2149509244.jpg?w=2000']
function Swiper() {
const [image,changeImg]=useState(0)
  return (
    <div className='swiper'>
      <SliderImages swipImg={swipImg} image={image} />
      <SwiperBtns count={swipImg.length} changeImg={changeImg} image={image}/>
    </div>
  )
}

export default Swiper
