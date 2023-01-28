import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Done from '../steps/Done'
import './orderState.css'
import { useTranslation } from 'react-i18next'
function OrderState({ isMove, setIsMove }) {
  const [isDone, setIsDone] = useState(false)
  const factoryData = {
    id: 1,
    factoryName: 'Factory',
    img: 'https://www.logoarena.com/contestimages/public_new/3421/2451_1376819729_thefactory1.png',
    location: 'location',
    type: 'type of factory',
    fileName: 'file name',
    category: 'test',
    madeOf: 'Gold',
    price: 50,
    dateFrom: '01/01/2022',
    dateTo: '10/01/2022',
    details: 'lab lab lab lab lab lab lab lab lab',
  }
  const { t } = useTranslation()

  return (
    <div className="factory-order">
      <section className="logo-Factory">
        <div className="Factory-info">
          <img src={factoryData.img} alt="" />
          <div>
            <h3>{factoryData.factoryName}</h3>
            <p>{factoryData.location}</p>
            <p>{factoryData.type}</p>
          </div>
        </div>
        <Link>{t("factorypage")}</Link>
      </section>
      <section className="approved-design">
        <h3>{t("approveddesign")}</h3>
        <div>
          <p>{t("name")}: {factoryData.fileName}</p>
          <p>{t("category")}: {factoryData.category}</p>
          <p>{t("madeof")}: {factoryData.madeOf}</p>
        </div>
      </section>
      <section className="approved-design">
      <h3>{t("approveddesign")}</h3>
        <div>
          <p>
            {t("price")}: <span> {factoryData.price} SAR PER unit</span>{' '}
          </p>
          <p>
            {t("date")}:{' '}
            <span>
              from {factoryData.dateFrom} to {factoryData.dateTo}
            </span>
          </p>
          <p>
            {t("details")}: <span>{factoryData.details}</span>
          </p>
        </div>
      </section>
      <section className="accept-reject-btns">
        <button onClick={() => setIsDone(true)} className="accept-btn">
          {t("accept")}
        </button>
        <button onClick={() => setIsMove(false)} className="reject-btn">
          {t("reject")}
        </button>
      </section>
      {isDone && (
        <Done
          data={{
            title: t('orderplaced'),
            details: t('ordermsgt')
          }}
        />
      )}
    </div>
  )
}

export default OrderState
