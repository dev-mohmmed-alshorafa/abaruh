import React, { useState } from 'react'
import './profile.css'
function Caver({list, setList}) {
  return (
    <div className="profile">
      <img
        className="caver-profile"
        src="https://timelinecovers.pro/facebook-cover/download/stunning-little-flowers-facebook-cover.jpg"
        alt=""
      />

      <div className="control-list">
        <img
          className="brand-img"
          src="https://media.zid.store/thumbs/2dab45d1-a3b8-4c5a-aad7-a06391c254de/5c0f7100-e730-4066-b6d9-27e66d957cd6-thumbnail-770x770-70.jpg"
          alt=""
        />
        <div>
          <img
            className="icon-list"
            onClick={() => setList(!list)}
            src={!list ? './icons/grid.png' : './icons/list.png'}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Caver
