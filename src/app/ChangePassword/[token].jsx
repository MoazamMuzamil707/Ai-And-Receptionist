"use client"

import MainComponent from '@/components/Main'
import ChangePasswordContainer from '@/containers/ChangePasswordContainer'
import React from 'react'

function ChangePasswaord({ params }) {
    console.log("{ params }",{ params })
  return (
    <div>
    <MainComponent>
    <ChangePasswordContainer />
    </MainComponent>
      </div>
  )
}

export default ChangePasswaord