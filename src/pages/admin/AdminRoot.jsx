import React from 'react'
import Header from '../../layout/admin/Header/Header'
import Footer from '../../layout/admin/Footer/Footer'
import { Outlet } from 'react-router'
import { Toaster } from 'react-hot-toast'
    

const AdminRoot = () => {
  return (
    <React.Fragment>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    <Toaster></Toaster>
    </React.Fragment>
  )
}

export default AdminRoot