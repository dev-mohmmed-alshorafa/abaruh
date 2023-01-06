import React from 'react'

function Review({review}) {
  return (
    <div className='review'>
       {review.img?<img alt='' src={review.img}/>
      :<h2 className='avatar-reviewer-name'>
        {review.name.toUpperCase().split(' ').map(x=>x.slice(0,1)).join('')}</h2>}
      <div className='reviewer-info' >
      <p className='reviewer-name'>{review.name}</p>
      <span className='review-reviewer'>
      {review.reviwe}
      </span>
      </div>
      <p className='time-review'>{review.time}</p>
    </div>
  )
}

export default Review
