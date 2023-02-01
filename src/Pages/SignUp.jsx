import React, { useState } from 'react'
import '../components/signup/signup.css'
import SelectNum from '../components/signup/SelectNum'
import Apiservices from '../services/ApiServices'
import JwtService from '../services/TokenServices'
import { useDispatch } from 'react-redux'
import { actions } from '../Redux'
import Loading from '../components/signLoading'
import SignUpValid from '../validation/SignUp'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

function SignUp() {
  const [isLoading, setIsLoading] = useState(false)
  const i = {
    name: '',
    phoneNumber: '',
    confirmpassword: '',
    password: '',
    email: '',
  }
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [isCheck, setIsCheck] = useState(false)
  const [signup, setSignup] = useState(i)
  const handelSignUp = async (e) => {
    e.preventDefault()

    try {
      const validated = await SignUpValid.validate(signup)
      setIsLoading(true)
      Apiservices.post('/auth/register', signup).then((res) => {
        if (res.data.token) {
          JwtService.setToken(res.data.token)
          dispatch(actions.protect({ ...res.data.data, _id: res.data.data.id }))
          dispatch(actions.setShowForm(0))
          setIsLoading(false)

          setSignup(i)
        } else {
          setIsLoading(false)
        }
      })
    } catch (err) {
      toast.error(err.message)
    }
  }
  return (
    <div className="signup">
      <img className="signup-logo" src="./icons/logo.png" alt="" />
      <form action="">
        <input
          className="signup-input"
          placeholder={t('name')}
          value={signup.name}
          onChange={(e) => setSignup({ ...signup, name: e.target.value })}
          type="text"
        />
        <div className="phone-num">
          <SelectNum />
          <input
            // className="signup-input"
            value={signup.phoneNumber}
            onChange={(e) =>
              setSignup({ ...signup, phoneNumber: e.target.value })
            }
            placeholder={t('pnum')}
            type="text"
          />
        </div>
        <input
          className="signup-input"
          value={signup.email}
          onChange={(e) => setSignup({ ...signup, email: e.target.value })}
          placeholder={t('emailoptional')}
          type="text"
        />
        <input
          className="signup-input"
          value={signup.password}
          onChange={(e) => setSignup({ ...signup, password: e.target.value })}
          placeholder={t('password')}
          type="password"
        />
        <input
          className="signup-input"
          value={signup.confirmpassword}
          onChange={(e) =>
            setSignup({ ...signup, confirmpassword: e.target.value })
          }
          placeholder={t('confirmpassword')}
          type="password"
        />
        <div className="tearams">
          <input
            placeholder="Name"
            onChange={() => setIsCheck(!isCheck)}
            required
            type="checkbox"
            name=""
            id=""
          />

          <p>
            {t('read')}
            <span> {t('team')}</span>
          </p>
        </div>
        <button onClick={handelSignUp} className="signup-btn">
          {t('signup')}
        </button>
      </form>
      {isLoading && <Loading />}
    </div>
  )
}

export default SignUp
