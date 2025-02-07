"use client"
import NoAuthPagesLayout from '@/components/layouts/noAuth'
import ChangePasswordContainer from '@/containers/ChangePasswordContainer'
import React from 'react'

function ChangePasswaord({ params }) {
  return (
    <div>
      <NoAuthPagesLayout>
        <ChangePasswordContainer />
      </NoAuthPagesLayout>
    </div>
  )
}

export default ChangePasswaord