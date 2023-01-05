import React from 'react'

function SwiperBtns({image,changeImg,count}) {
  const next=()=>{
    if(image/100>-1*(count-1) ){
      changeImg(image-100)
    }
  }
  const back=()=>{
    if(image/100<=-1 ){
      changeImg(image+100)

    }
    }
  return (
    <div className='swiper-btns'>
      <button onClick={back}><img src='./swiper/back.png'/> </button>
      <button onClick={next}><img src='./swiper/next.png'/> </button>
    </div>
  )
}

export default SwiperBtns
