import { Skeleton } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

function SmallAddress() {
  return (
    <Stack mt={6} sx={{margin:'40px auto'}} alignItems={'center'} width={{sx:'100%',sm:'600px'}}>
    <Skeleton sx={{borderRadius:'20px'}} variant="rectangular" width={'100%'} height={100}  />

    </Stack>
  )
}

export default SmallAddress
