import React from 'react'
import { useSelector } from 'react-redux'
import NotAvailable from './NotAvailable'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Box, Container } from '@mui/system'
import { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import { Button, IconButton, Stack } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import Typography from '@mui/material/Typography'
import { Phishing } from '@mui/icons-material'
import UpdateUser from '../components/updateUser/UpdateUser'
import Loading from '../components/signLoading'

function Privacy() {
  const user = useSelector((e) => e.user)
  const [edit, setedit] = useState(user)
  const [editName, setEditName] = useState(true)
  const [editEmail, setEditEmail] = useState(true)
  const [editNum, setEditNum] = useState(true)
  const [editPassword, setEditPassword] = useState(true)
  const isLoadingUser = useSelector((e) => e.isLoadingUser)
  const params = useParams()
  useEffect(() => {

    if (user) {
      setedit(user)
    }
  }, [user])
  if (isLoadingUser ) {
    return <h1>loading...</h1>
  }
  if (!edit || (edit && edit._id !== params.id)) {
    return <NotAvailable />
  }
  return (
    <Stack>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        width={'100%'}
        alignItems={'center'}
        p={'16px'}
        sx={{ background: '#3351A6' }}
      >
        <Link to={'/'}>
          <IconButton>
            <ArrowBackIosIcon sx={{ color: '#ffff', fontSize: '29px' }} />
          </IconButton>
        </Link>
        <Typography sx={{ color: '#ffff' }} variant="h6">
          privacy
        </Typography>
        <Box width={'45px'} sx={{ color: '#ffff' }} variant="h6"></Box>
      </Stack>
      <Typography
        align="center"
        m={'20px 0'}
        sx={{ color: '#3351A6' }}
        variant="h6"
      >
        Setting
      </Typography>
      <Container
        sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        maxWidth="sm"
        className="add-product-form"
      >
        <Box position={'relative'}>
          <input
            disabled={editName}
            value={edit.name}
            onChange={(e) => setedit({ ...edit, name: e.target.value })}
            type="text"
            name=""
            id=""
          />
          <IconButton
            onClick={() => setEditName(!editName)}
            sx={{
              padding: '0 !important',
              position: 'absolute',
              right: '10px',
              top: '17px',
            }}
          >
            {editName ? <EditIcon /> : <CheckIcon />}
          </IconButton>
        </Box>
        <Box position={'relative'}>
          <input
            disabled={editEmail}
            value={edit.email}
            onChange={(e) => setedit({ ...edit, email: e.target.value })}
            type="text"
            name=""
            id=""
          />
          <IconButton
            onClick={() => setEditEmail(!editEmail)}
            sx={{
              padding: '0 !important',
              position: 'absolute',
              right: '10px',
              top: '17px',
            }}
          >
            {editEmail ? <EditIcon /> : <CheckIcon />}
          </IconButton>
        </Box>
        <Box position={'relative'}>
          <input
            disabled={editNum}
            value={'Ph.num'}
            // onChange={(e) => setedit({ ...edit, name: e.target.value })}
            type="text"
            name=""
            id=""
          />
          <IconButton
            onClick={() => setEditNum(!editNum)}
            sx={{
              padding: '0 !important',
              position: 'absolute',
              right: '10px',
              top: '17px',
            }}
          >
            {editNum ? <EditIcon /> : <CheckIcon />}
          </IconButton>
        </Box>
        <Box position={'relative'}>
          <input
            disabled={editPassword}
            value={'password'}
            // onChange={(e) => setedit({ ...edit, name: e.target.value })}
            type="text"
            name=""
            id=""
          />
          <IconButton
            onClick={() => setEditPassword(!editPassword)}
            sx={{
              padding: '0 !important',
              position: 'absolute',
              right: '10px',
              top: '17px',
            }}
          >
            {editPassword ? <EditIcon /> : <CheckIcon />}
          </IconButton>
        </Box>
      </Container>
      <Container maxWidth="sm">
        <Stack direction={'row'} justifyContent={'flex-end'} gap={'20px'}>
          <UpdateUser />
          <Button
            onClick={() => {
              setEditName(true)
              setEditEmail(true)
              setEditNum(true)
              setEditPassword(true)
              setedit(user)
            }}
            variant="contained"
            sx={{ background: '#3351A6' }}
          >
            rest
          </Button>
        </Stack>
      </Container>
      
    </Stack>
  )
}

export default Privacy
