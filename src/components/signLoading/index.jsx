import { CircularProgress } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

function Loading() {
  return (
    <Stack alignItems={'center'} justifyContent={'center'} sx={{position:'absolute',zIndex:50,top:'0',right:'0',width:'100%',height:'100%',background:'#00000059'}}>
      <CircularProgress />
    </Stack>
  )
}

export default Loading
