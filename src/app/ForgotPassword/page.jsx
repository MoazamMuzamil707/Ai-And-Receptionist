"use client"
import NoAuthPagesLayout from '@/components/layouts/noAuth'
import ForgotPasswordContainer from '@/containers/ForgotPasswordContainer'
import React from 'react'

function ForgotPassword() {
  return (
    <div>
      <NoAuthPagesLayout>
        <ForgotPasswordContainer />
      </NoAuthPagesLayout>
    </div>
  )
}

export default ForgotPassword