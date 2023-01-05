import React from 'react'

function SliderImages({image,swipImg}) {
  return (
    <div style={{left:`${image}vw`}} className='slider-images'>
      {
       swipImg.map((e,i)=> <div key={i}>
       <img src={e} /> </div>) 
      }
    </div>
  )
}

export default SliderImages
