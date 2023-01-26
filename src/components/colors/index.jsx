import { Box } from '@mui/system'
import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
function Color({color,colors,setColors}) {
  return (
    <Box position={'relative'}>
      <Box sx={{width:'35px',height:'35px',background:color,borderRadius:'50%'}}></Box>
      <IconButton onClick={()=>setColors(colors.filter(e=>e.rgba!==color))}  sx={{border:'0.5px solid black',padding:'0 !important',top:'-3px',position:'absolute',right:'-7px'}} ><RemoveIcon fontSize='small'/></IconButton>
    </Box>
  )
}

export default Color
