import { Skeleton, Stack } from '@mui/material'
import React from 'react'

function SmallProductH() {
  return (
    <Stack alignItems={'center'} gap={'10px'}>
    <Skeleton
      sx={{ borderRadius: '20px', width: { xs: '95%', sm: '500px' } }}
      variant="rectangular"
      height={160}
    />
  </Stack>
  )
}

export default SmallProductH
