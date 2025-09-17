import React from 'react'
import AppBar from '../../components/AppBar'
import { Outlet } from 'react-router-dom'
import Footer from '../../page/Footer'
import { Toolbar } from '@mui/material'

const PublicRoutes = () => {
  return (
    <>
      <AppBar/>
      <Toolbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default PublicRoutes
