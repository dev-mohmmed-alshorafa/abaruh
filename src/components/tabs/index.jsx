import React, { useEffect, useState } from 'react'
import './tabs.css'
import Apiservices from '../../services/ApiServices'

function Tabs({ setCategoryId }) {
  const [tabs, setTabs] = useState(0)
  const [category, setCategory] = useState([])
  useEffect(() => {
    Apiservices.get('/category').then((res) => setCategory(res.data.data))
  }, [])

  const getCategory = (i) => {
    setTabs(i)
  }
  return (
    <div className="tabs">
      {category.map((e, i) => (
        <div
          onClick={() => {
            setCategoryId(e._id)
            getCategory(i)
          }}
          className="tab"
          key={i}
        >
          <img
            style={{
              background:
                i !== tabs
                  ? 'linear-gradient(153.43deg, #3351A6 16.67%, #4265C9 100%)'
                  : '#ffff',
            }}
            src={i === tabs ? e.activeImage : e.image}
            alt=""
          />
          <h3 className="name-tab">{e.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default Tabs
