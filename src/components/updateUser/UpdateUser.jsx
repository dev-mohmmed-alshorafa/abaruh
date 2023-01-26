import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Stack } from '@mui/system'

export default function UpdateUser() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button sx={{background:'#3351A6'}} variant="contained" onClick={handleClickOpen}>
        Save
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Stack className="add-product-form">
          <input
            placeholder="Confirm Password
"
            style={{ width: '300px' }}
            type="text"
          />
          <Button
            sx={{ padding: '15px !important', fontSize: '16px !important' }}
            variant="contained"
            onClick={handleClickOpen}
          >
            Confirm Password
          </Button>
        </Stack>
      </Dialog>
    </div>
  )
}
