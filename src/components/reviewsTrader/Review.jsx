import { Stack } from '@mui/system'
import React from 'react'

function Review({review}) {
  return (
    <Stack justifyContent={'space-between'} direction={'row'} p={1.5}>
      <Stack gap={'18px'} direction={'row'}>
        <img className='review-img' src={review.img} alt="" />
        <Stack>
          <h3 className='review-name'> {review.name}</h3>
          <p className='review-description'>{review.description}</p>
        </Stack>
      </Stack>
      <p className='review-day'>{review.day}</p>
    </Stack>
  )
}

export default Review
