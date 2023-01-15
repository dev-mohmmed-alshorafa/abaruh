import { Skeleton, Stack } from '@mui/material'
import React from 'react'

function SmallOrder() {
  return (
    <Stack alignItems={'center'} gap={'10px'}>
      <Skeleton
        sx={{ borderRadius: '20px', width: { xs: '100%', sm: '500px' } }}
        variant="rectangular"
        height={80}
      />
    </Stack>
  )
}

export default SmallOrder
