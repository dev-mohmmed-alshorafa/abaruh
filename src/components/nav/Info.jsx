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
       <div>
        <img src='./icons/order.png' alt=''/>
      <Link to='/orders'>{t("info.order")}</Link>
      </div>
      <div>
        <img src='./icons/adress.png' alt=''/>
      <Link to='/addresses'>{t("info.addresses")}</Link>
      </div>
      <div>
        <img src='./icons/policy.png' alt=''/>
      <Link to='/privacy'>{t("info.privacy")}</Link>
      </div>
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
