import React from 'react'
import { Trans, useTranslation } from "react-i18next";

function SayHi() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
        <div>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ar")}>AR</button>
      <hr/>
      <h1>{t("title")}</h1>
      </div>
    </div>
  )
}

export default SayHi
