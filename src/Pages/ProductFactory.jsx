import { Avatar, Button, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React from 'react'
import Offer from '../components/offerDetails'

function ProductFactory() {
  const data = {
    id: 4,
    name: 'kakashi',
    user: 'mohmmed',
    cata: 'shose',
    made: 'gold',
    date: '1/1/2022 to 03/2/2023',
    img: 'https://1.bp.blogspot.com/-sHI-xcnZs2M/YOxql0dSCsI/AAAAAAACJoM/HzjHY26WaTAcv2O0wNqdaJfH9-Sm0UYcwCLcBGAsYHQ/w400-h400/1197-9.jpg',
    des: 'Lorem ipsum dolor sit amet consectetur  ullam laborum distinctio delectus s at odio.',
  }
  return (
    <Box>
      <Stack
        direction={{ sm: 'row', xs: 'column' }}
        alignItems={{ sm: 'center', xs: 'flex-start' }}
        minHeight={{ sm: '100vh', xs: 'auto' }}
      >
        <Stack
          margin={'auto'}
          maxWidth={'600px'}
          height={'300px'}
          width={'100%'}
        >
          <img
            style={{ width: '100%', height: '100%', borderRadius: '20px' }}
            src={data.img}
            alt=""
          />
        </Stack>
        <Container maxWidth="sm">
          <Stack mt={'10px'} gap={'10px'} alignItems={'center'}>
            <Typography
              sx={{ color: '#3553a7' }}
              fontSize={'22px'}
              align="center"
              variant="h6"
            >
              {data.name}
            </Typography>{' '}
            <Typography
              sx={{ color: 'gray' }}
              align="center"
            >
              {data.des}
            </Typography>
          </Stack>
          <Stack mt={'20px'} direction={'row'} gap="10px">
            <Avatar alt={data.user} />
            <Stack>
              <Typography variant="h6" sx={{ color: '#3553a7' }}>
                {data.user}
              </Typography>
              <Typography sx={{ color: 'gray' }}>{data.des}</Typography>
            </Stack>
          </Stack>
          <Stack mt={'20px'}>
            <Typography variant="h6" sx={{ color: '#3553a7' }}>
              Details :
            </Typography>
            <Stack pt={'20px'} gap={'20px'}>
              <Stack gap={'40px'} direction={'row'}>
                <Typography variant="subtitle2">Name : </Typography>
                <Typography sx={{ color: 'gray' }} variant="subtitle2">
                  {' '}
                  {data.name}
                </Typography>
              </Stack>
              <Stack gap={'20px'} direction={'row'}>
                <Typography variant="subtitle2">Category : </Typography>
                <Typography sx={{ color: 'gray' }} variant="subtitle2">
                  {' '}
                  {data.cata}
                </Typography>
              </Stack>
              <Stack gap={'20px'} direction={'row'}>
                <Typography variant="subtitle2">Made Of : </Typography>
                <Typography sx={{ color: 'gray' }} variant="subtitle2">
                  {' '}
                  {data.made}
                </Typography>
              </Stack>
              <Stack gap={'46px'} direction={'row'}>
                <Typography variant="subtitle2">Date : </Typography>
                <Typography sx={{ color: 'gray' }} variant="subtitle2">
                  {' '}
                  {data.date}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
         
          <Offer/>
        </Container>
      </Stack>
    </Box>
  )
}

export default ProductFactory
