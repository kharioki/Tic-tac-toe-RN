import React from 'react'
import AppProvider from './AppProvider'
import Routes from './Routes'

const Provider = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  )
}

export default Provider
