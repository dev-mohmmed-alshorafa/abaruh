import React from 'react'

function SwiperBtns({isActive,setIsActive}) {
  const next=()=>{
   
      setIsActive(isActive+1) 
      console.log(isActive);
       
  }
  const back=()=>{

      setIsActive(isActive+1) 

      console.log(isActive);

    }
  return (
    <div className='swiper-btns'>
      <button onClick={back}><img src='./swiper/back.png'/> </button>
      <button onClick={next}><img src='./swiper/next.png'/> </button>
    </div>
  )
}

export default SwiperBtns
