import React from 'react'
import { useState } from 'react';
import {  useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

function Info() {
  const { t, i18n } = useTranslation();
const [isOn,setIsOn]=useState(false)
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsOn(!isOn)
  };
  return (
    <div className='info'>
    <section className='info-t'>
       <Link to='/orders'>
        <img src='./icons/order.png' alt=''/>
      <p>{t("info.order")}</p>
      </Link>
      <Link to='/addresses'>
        <img src='./icons/adress.png' alt=''/>
      <p>{t("info.addresses")}</p>
      </Link>
      <Link to='/privacy'>
        <img src='./icons/policy.png' alt=''/>
      <p>{t("info.privacy")}</p>
      </Link>
      <div className='lng'>
        <p>English</p>
        <div className='lng-btns'>
        <button onClick={() => changeLanguage("en")}></button>
      <button onClick={() => changeLanguage("ar")}></button>
      <span style={{left:isOn===false?0:'20px'}} className='span-lng'></span>
        </div>
      <p>العربيه</p>
      </div></section>
     
    </div>
  )
}

export default Info
