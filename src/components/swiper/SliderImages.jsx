import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
function SliderImages({swipImg}) {
  return (
      <Carousel className='slider' showIndicators={false} autoPlay={true} infiniteLoop={true} showStatus={false}>
        {
swipImg.map(e=> <div key={e}>
  <img
    src={e}
    alt=""
  />
</div>)
        }
       
      
      </Carousel>
  )
}

export default SliderImages
