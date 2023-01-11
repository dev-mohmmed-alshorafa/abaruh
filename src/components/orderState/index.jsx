import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Done from '../steps/Done'
import './orderState.css'
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
        <Link>Factory Page</Link>
      </section>
      <section className="approved-design">
        <h3>Approved-Design</h3>
        <div>
          <p>Name: {factoryData.fileName}</p>
          <p>category: {factoryData.category}</p>
          <p>Made Of: {factoryData.madeOf}</p>
        </div>
      </section>
      <section className="approved-design">
        <h3>Approved-Design</h3>
        <div>
          <p>
            Price: <span> {factoryData.price} SAR PER unit</span>{' '}
          </p>
          <p>
            Date:{' '}
            <span>
              from {factoryData.dateFrom} to {factoryData.dateTo}
            </span>
          </p>
          <p>
            Details: <span>{factoryData.details}</span>
          </p>
        </div>
      </section>
      <section className="accept-reject-btns">
        <button onClick={() => setIsDone(true)} className="accept-btn">
          Accept
        </button>
        <button onClick={() => setIsMove(false)} className="reject-btn">
          Reject
        </button>
      </section>
      {isDone && (
        <Done
          data={{
            title: 'Order Placed!',
            details:
              'your order has placed successfully for more details,check all My orders page under profile tab.',
          }}
        />
      )}
    </div>
  )
}

export default OrderState
