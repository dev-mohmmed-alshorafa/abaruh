import { Container } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Review from './Review'

function Reviews() {
  const data = [
    {
      id: 1,
      img: 'https://m.media-amazon.com/images/I/41-XueLGUZL._AC_.jpg',
      name: 'Kakashi',
      description: `Lorem ipsum dolor sit amet
       consectetur adipisicing elit. Sunt assumenda rerum exercitationem 
       labore commodi culpa nemo unde voluptatum! Rem veritatis totam sequi 
       eum impedit ut praesentium voluptates aliquam fuga perferendis!
    `,
      day: '7 sept',
    },
    {
      id: 3,
      img: 'https://m.media-amazon.com/images/I/41-XueLGUZL._AC_.jpg',
      name: 'Kakashi',
      description: `Lorem ipsum dolor sit amet
       consectetur adipisicing elit. Sunt assumenda rerum exercitationem 
       labore commodi culpa nemo unde voluptatum! Rem veritatis totam sequi 
       eum impedit ut praesentium voluptates aliquam fuga perferendis!
    `,
      day: '7 sept',
    },
    {
      id: 2,
      img: 'https://m.media-amazon.com/images/I/41-XueLGUZL._AC_.jpg',
      name: 'Kakashi',
      description: `Lorem ipsum dolor sit amet
       consectetur adipisicing elit. Sunt assumenda rerum exercitationem 
       labore commodi culpa nemo unde voluptatum! Rem veritatis totam sequi 
       eum impedit ut praesentium voluptates aliquam fuga perferendis!
    `,
      day: '7 sept',
    },
  ]
  return (
    <Container>
      <p className='last-reviews'>Last Reviews</p>
      <Stack>
        {data.map((e) => (
          <Review review={e} key={e.id} />
        ))}
      </Stack>
    </Container>
  )
}

export default Reviews
