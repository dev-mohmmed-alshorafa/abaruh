import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

function OrderDetailsItem({ details }) {
  return (
    <Stack gap={'20px'}>
      <Stack direction={'row'} gap={'30px'}>
        <Stack className="details-order-info">
          <Typography sx={{ color: '#000000 !important', width: '80px' }}>
            Category :
          </Typography>
        </Stack>
        <Typography maxWidth={'300px'} className="details-order-price">
          Shose
        </Typography>
      </Stack>
      <Stack direction={'row'} gap={'30px'}>
        <Stack className="details-order-info">
          <Typography sx={{ color: '#000000 !important', width: '80px' }}>
            Made Of :
          </Typography>
        </Stack>
        <Typography maxWidth={'300px'} className="details-order-price">
          Gold
        </Typography>
      </Stack>
      <Stack direction={'row'} gap={'30px'}>
        <Stack className="details-order-info">
          <Typography sx={{ color: '#000000 !important', width: '80px' }}>
            Amount :
          </Typography>
        </Stack>
        <Typography maxWidth={'300px'} className="details-order-price">
          500
        </Typography>
      </Stack>
      <Stack direction={'row'} gap={'30px'}>
        <Stack className="details-order-info">
          <Typography sx={{ color: '#000000 !important', width: '80px' }}>
            Date :
          </Typography>
        </Stack>
        <Typography maxWidth={'300px'} className="details-order-price">
          01/01/2023
        </Typography>
      </Stack>
      <Stack direction={'row'} gap={'30px'}>
        <Stack className="details-order-info">
          <Typography sx={{ color: '#000000 !important', width: '80px' }}>
            Description :
          </Typography>
        </Stack>
        <Typography maxWidth={'400px'} className="details-order-price">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          beatae suscipit, tenetur ullam mollitia, obcaecati nam in maxime
          repellat nostrum iusto harum rerum autem aliquid, recusandae quae
          voluptatibus quasi incidunt.
        </Typography>
      </Stack>
    </Stack>
  )
}

export default OrderDetailsItem
