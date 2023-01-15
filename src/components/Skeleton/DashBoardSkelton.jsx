import { Container, Skeleton, Stack } from '@mui/material'
import React from 'react'

function DashBoardSkelton() {
  return (
    <Container sx={{marginTop:'80px'}} maxWidth={'md'}>
        <Skeleton
        variant="rectangular"
        width={'100%'}
        height={'22vh'}
      />
      <Stack direction="row"
        flexWrap="wrap"
        gap="16px"
        justifyContent={'center'} sx={{margin:'33px 0'}}>
      <Skeleton
        variant="rectangular"
        width={'47%'}
        height="19vh"
        />
       <Skeleton
        variant="rectangular"
        width={'47%'}
        height="19vh"
        />
       <Skeleton
        variant="rectangular"
        width={'100%'}
        height="19vh"
        />
      </Stack>
      <Skeleton
        variant="rectangular"
        width={'100%'}
        height="19vh"
        />
    </Container>
  )
}

export default DashBoardSkelton
