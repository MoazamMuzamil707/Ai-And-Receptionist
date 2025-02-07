import UsersContainer from '@/containers/users'
import React from 'react'

function User() {
  return (
    <div>
      <NoAuthPagesLayout>
        <UsersContainer />
      </NoAuthPagesLayout>
    </div>
  )
}

export default User