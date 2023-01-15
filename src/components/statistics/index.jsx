import { Container } from '@mui/material'
import { Stack, Box } from '@mui/system'
import './statistics.css'
import React from 'react'

function Statistics() {
  return (
    <Container sx={{marginTop:'33px'}} maxWidth="md">
      <Stack
        direction="row"
        flexWrap="wrap"
        gap="16px"
        justifyContent={'center'}
      >
        <Box className='statistic-box'
          width="47%"
          sx={{
            background:
              'linear-gradient(143deg, #3351A6 20.1%, #3463EA 100.55%)',
            borderRadius: '20px',
          }}
          height="19vh"
        >
          <p className='statistic-name'>Orders</p>
          <p className='statistic-num'>1,250</p>
          <p className='statistic-days'>last 7 days</p>
        </Box>
        <Box className='statistic-box'
          width="47%"
          sx={{
            background:
              'linear-gradient(143deg, #057A1E 20.1%, #04BF2D 100.55%)',
            borderRadius: '20px',
          }}
          height="19vh"
        >
          <p className='statistic-name' >Sales</p>
          <div className='statistic-box-num'>
            <p className='statistic-num'>35,760</p>
            <p className='sar'>SAR</p>
          </div>
          <p className='statistic-days'>last 7 days</p>
        </Box>
        <Box className='statistic-box'
          width="100%"
          sx={{
            background:
              ' linear-gradient(143deg, #FAA61A 20.1%, #A76F13 100.55%)',
            borderRadius: '20px',
          }}
          height="19vh"
        >
          <p className='statistic-name'>Profit</p>
          <p className='statistic-num'>1,250</p>
          <p></p>
        </Box>
      </Stack>
    </Container>
  )
}

export default Statistics
