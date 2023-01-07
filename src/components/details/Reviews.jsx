import React from 'react'
import Review from './Review'

function Reviews() {
  const data=[{
    id:1,
    name:'Hataki Kakashi',
    time:'7 sept',
    reviwe:`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Accusantium, quo ab? Nostrum soluta aliquam cupiditate nobis pariatur illo labore? Reprehenderit eaque veritatis, 
    enim ratione numquam placeat est consequatur tempora porro.`
  },
  {
    id:2,
    name:'Hataki Kakashi',
    time:'7 sept',
    reviwe:`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Accusantium, quo ab? Nostrum soluta aliquam cupiditate nobis pariatur illo labore? Reprehenderit eaque veritatis, 
    enim ratione numquam placeat est consequatur tempora porro.`
  },
  {
    id:3,
    name: 'Hataki Kakashi',
    time:'7 sept',
    reviwe:`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Accusantium, quo ab? Nostrum soluta aliquam cupiditate nobis pariatur illo labore? Reprehenderit eaque veritatis, 
    enim ratione numquam placeat est consequatur tempora porro.`
  },
  {
    id:3,
    name: 'Hataki Kakashi',
    time:'7 sept',
    reviwe:`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Accusantium, quo ab? Nostrum soluta aliquam cupiditate nobis pariatur illo labore? Reprehenderit eaque veritatis, 
    enim ratione numquam placeat est consequatur tempora porro.`
  },
  {
    id:3,
    name: 'Hataki Kakashi',
    time:'7 sept',
    reviwe:`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Accusantium, quo ab? Nostrum soluta aliquam cupiditate nobis pariatur illo labore? Reprehenderit eaque veritatis, 
    enim ratione numquam placeat est consequatur tempora porro.`
  },
  {
    id:3,
    name: 'Hataki Kakashi',
    time:'7 sept',
    reviwe:`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Accusantium, quo ab? Nostrum soluta aliquam cupiditate nobis pariatur illo labore? Reprehenderit eaque veritatis, 
    enim ratione numquam placeat est consequatur tempora porro.`
  },
  {
    id:3,
    name: 'Hataki Kakashi',
    time:'7 sept',
    reviwe:`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Accusantium, quo ab? Nostrum soluta aliquam cupiditate nobis pariatur illo labore? Reprehenderit eaque veritatis, 
    enim ratione numquam placeat est consequatur tempora porro.`
  }]
  return (
    <div className='reviews'>
      {
       data.map(e=> <Review review={e} key={e.id} /> ) 
      }
    </div>
  )
}

export default Reviews
