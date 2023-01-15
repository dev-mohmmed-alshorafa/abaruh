import { Stack } from '@mui/system'
import React from 'react'
import Skeleton from '@mui/material/Skeleton';

function SmallProduct() {
  return (
    <Stack sx={{borderRadius:'20px',padding:'10px 0px',width:'160px',height:'306px' ,boxShadow: 'rgb(0 0 0 / 24%) 0px 3px 8px'}} mt={1}>
<Skeleton sx={{borderRadius:'20px 20px 0 0'}} variant="rectangular" width={'100%'} height={179} />
<Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
<Skeleton variant="text" height={40} width={140} sx={{ fontSize: '1rem' }} />
<Skeleton variant="text" height={40} width={40} sx={{ fontSize: '1rem' }} />

    </Stack>
  )
}

export default SmallProduct
