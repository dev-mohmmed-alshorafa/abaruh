import { CircularProgress, Container, Stack } from '@mui/material'
import React from 'react'

function LoadingHome() {
  return (
    <Stack height='100vh' width='100%'justifyContent='center' alignItems='center'>
            <CircularProgress />

    </Stack>
  )
}

export default LoadingHome
