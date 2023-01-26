import { Button, Container, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import SelectRef from '../addnewProduct.jsx/SelectRef'
import Apiservices from '../../services/ApiServices'
import DateInput from './DateInput'

function Form() {
  const [categorys, setcategorys] = useState([])
  const [category, setCategory] = useState({ name: 'Category', _id: 0 })
  useEffect(() => {
    Apiservices.get('/category').then((res) => {
      setcategorys(res.data.data)
    })
  }, [])
  return (
    <Container className='datels-form' sx={{padding:'20px'}} maxWidth="sm">
      <Typography mb={'15px'} variant='h6' sx={{color:"#3553a7"}} >Details</Typography>
      <Stack gap={'15px'}  width={'100%'}>
          <input placeholder='Price' style={{width:'80% !important'}} className="input-dateils"  type="text" />
          <Typography sx={{color:"#3553a7"}}>total : 40</Typography>
        <textarea placeholder='typing here' className="input-dateils" />
        <SelectRef
          isChoose={category}
          setIsChoose={setCategory}
          data={categorys}
        />
        <input placeholder='Size' className="input-dateils" type="text" />
        <input placeholder='Made Of' className="input-dateils" type="text" />
        <input placeholder='Amount' className="input-dateils" type="text" />
        <DateInput/>
        <Button sx={{background:"#3553a7",borderRadius:'20px',padding:"12px"}} variant="contained" >Send to Designer</Button>
      </Stack>
    </Container>
  )
}

export default Form
