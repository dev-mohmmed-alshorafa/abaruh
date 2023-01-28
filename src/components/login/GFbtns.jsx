import React, { useState } from 'react'
import Apiservices from '../../services/ApiServices'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/system'

function GFbtns() {
  const [a, setA] = useState('')
  const loginWithGoogle = () => {
    Apiservices.get('/auth').then((res) => setA(res.data))
  }
  const { t } = useTranslation()
  return (
    <div className="g-f-btns">
      <button onClick={loginWithGoogle}>
        <img src="./icons/google.png" alt="" />
        <p>{t("continegoogle")} </p>
        <Box sx={{width:'24px'}}></Box>
      </button>

      <button>
        <img src="./icons/facebook.png" alt="" />
        <p>{t("continefacebook")} </p>
        <Box sx={{width:'24px'}}></Box>

      </button>
    </div>
  )
}

export default GFbtns
