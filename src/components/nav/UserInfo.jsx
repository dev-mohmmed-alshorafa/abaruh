import { Stack } from '@mui/system'
import React from 'react'

function UserInfo({ user }) {
  return (
    <div className="user-info">
      <div className="avatar">
        {user.img ? (
          <>
            <img src={user.img} />
          </>
        ) : (
          <Stack alignItems={'center'} justifyContent={'center'} sx={{background:'var(--main-color)',width:'120px',height:'120px',borderRadius:'50%' }}>
            <h2>
              {user.name
                .toUpperCase()
                .split(' ')
                .map((x) => x.slice(0, 1))
                .join('')}
            </h2>
          </Stack>
        )}
      </div>
      <p>{user.name}</p>
      <span>{user.email}</span>
    </div>
  )
}

export default UserInfo
