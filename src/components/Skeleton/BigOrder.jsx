import { Skeleton, Stack } from '@mui/material'
import React from 'react'

function BigOrder() {
  return (
    <Stack  sx={{margin:'50px auto'}} justifyContent={'center'} alignItems={'center'} width={{xs:'100%',sm:'600px'}}>
      <Stack width={'80%'} mb={3}  justifyContent={'space-between'} direction={'row'}>
        <Stack alignItems={'center'} gap={'20px'} direction={'row'}>
        <Skeleton variant="rectangular" width={70} height={70} sx={{ fontSize: '1rem' }} />
        <Skeleton variant="rectangular" width={50} height={50} sx={{ fontSize: '1rem' }} />
        </Stack>
      <Skeleton variant="rectangular" width={50} height={10} sx={{ fontSize: '1rem' }} />

      </Stack>
      <Skeleton  variant="rectangular" width={'80%'} height={2} sx={{ fontSize: '1rem' }} />
      <Stack width={'80%'} mt={5} mb={5}>
      <Skeleton  variant="rectangular" width={120} height={50} sx={{ fontSize: '1rem' }} />
      </Stack>
      <Skeleton  variant="rectangular" width={'80%'} height={2} sx={{ fontSize: '1rem' }} />
      <Stack width={'80%'} mt={5}>
      <Skeleton  variant="rectangular" width={120} height={50} sx={{ fontSize: '1rem' }} />
      </Stack>
    </Stack>
  )
}

export default BigOrder
