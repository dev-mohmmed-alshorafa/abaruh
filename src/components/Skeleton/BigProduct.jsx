import { Box, Stack } from '@mui/system'
import React from 'react'
import Skeleton from '@mui/material/Skeleton'
function BigProduct() {
  return (
    <Stack gap={{xs:'0',sm:'20px'}}  direction={{xs:'column',sm:'row'}} alignItems={'center'} sx={{ borderRadius: '20px 20px 0 0',height:{xs:'auto',sm:'100vh'} }} mt={1}>
      <Skeleton
        sx={{ borderRadius: '20px 20px 0 0' }}
        variant="rectangular"
        width={'90%'}
        height={400}
      />
      <Box sx={{width:'90%'}}>
        <Stack justifyContent={'space-between'} direction={'row'}>
        <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
        </Stack>
        <Skeleton variant="text" height={170} width={'80%'} sx={{ fontSize: '1rem' }} />
        <Skeleton
          variant="text"
          height={150}
          width={'90%'}
          sx={{ fontSize: '1rem' }}
        />
       
      </Box>
    </Stack>
  )
}

export default BigProduct
