import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'
function Layout() {

  return (
    <>
        <div className='min-h-screen w-full  bg-slate-400'>
        <Header/>
     <Outlet/>
    <Footer/>
        </div>
    </>
  )
}

export default Layout