import React from 'react'

function SliderImages({swipImg,isActive}) {
  return (
    <div className='slider'>
      {
       swipImg.map((e,i)=> <div className={isActive%3!==i?'img-slider':'img-slider-active'} key={i}>
       <img  src={e} /> </div>) 
      }
    </div>
  )
}

export default SliderImages
