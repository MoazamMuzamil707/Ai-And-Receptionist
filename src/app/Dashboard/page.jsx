"use client"
import React from 'react'
import DashboardContainer from '@/containers/DashboardContainer'
import MainComponent from '@/components/Main'


function Dashboard() {
  return (
    <div>
      <MainComponent>
        <DashboardContainer />
      </MainComponent>
    </div>
  )
}

export default Dashboard