import { Box, Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

function ItemFactory({ item }) {
  return (
    <Stack
      gap="20px"
      p={1}
      sx={{
        border: '1px solid #b0aeae',
        borderRadius: '20px',
        textAlign: 'center',
        height:'170px'
      }}
      alignItems={'center'}
      direction={'row'}
    >
      <Box width={'120px'} height={'120px'} sx={{ borderRadius: '20px' }}>
        <img
          style={{ width: '100%', height: '100%', borderRadius: '20px' }}
          src={item.img}
          alt=""
        />
      </Box>
      <Stack maxWidth="200px" gap="3px">
        <Typography variant="h6">{item.name}</Typography>
        <Typography
          className="factory-product"
          height={'70px'}
          sx={{ color: '#b0aeae', overflow: 'scroll' }}
        >
          {item.des.slice(0, 50)}
          {item.des.length > 50 && '...'}
        </Typography>
        <Link
          to="/factory/product/1"
          style={{ width: '100%', textDecoration: 'none' }}
        >
          <Button
            sx={{ background: '#3351a6', borderRadius: '20px', width: '100%' }}
            variant="contained"
          >
            Show More
          </Button>
        </Link>
      </Stack>
    </Stack>
  )
}

export default ItemFactory
