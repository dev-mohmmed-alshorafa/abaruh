import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Avatar, Badge, Stack, Typography } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function NotificationFactory() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const data = [
    {
      notifacation: 'notifacation',
      user: 'Kakashi',
      id: 1,
    },
    {
      notifacation: 'notifacation',
      user: 'Kakashi',
      id: 2,
    },
    {
      notifacation: 'notifacation',
      user: 'Kakashi',
      id: 3,
    },
  ]

  return (
    <div>
      <Button
      sx={{padding:'0'}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
          <Badge badgeContent={data.length} color="primary">
            <NotificationsNoneIcon sx={{ color: '#d9d9d9' }} />
          </Badge>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {data.map((e, i) => (
          <MenuItem
            sx={{ borderBottom:i !==data.length-1 && '0.5px solid #b8adad', width: '300px' }}
            onClick={handleClose}
          >
            <Stack direction={'row'} width={'100%'} alignItems={'center'} justifyContent={'space-between'} >
            <Stack direction={'row'} gap='10px'>
              <Avatar alt={e.user}/>
              <Stack>
              <Typography sx={{color:'#3553a7'}}>{e.user}</Typography>
              <Typography sx={{color:'gray'}} >{e.notifacation}</Typography>
            </Stack>
            </Stack>
              <ArrowForwardIosIcon sx={{color:'#3553a7',fontSize:'14px'}}/>
            </Stack>
           
           
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
