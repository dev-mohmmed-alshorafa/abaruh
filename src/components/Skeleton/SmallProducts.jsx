import React from 'react'
import SmallProduct from './SmallProduct'
import { Stack } from '@mui/system'

function SmallProducts() {
  return (
    <Stack justifyContent='space-evenly' gap={'5px'} mt={4} flexWrap='wrap' direction={'row'}>
      <SmallProduct/>
      <SmallProduct/>
      <SmallProduct/>
      <SmallProduct/>
    </Stack>
  )
}

export default SmallProducts
