import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout

/*
    basic idea is ka har page pa header and footer same hoga
    but content in-between change ho hoga

    one method is ka har page pa header and footer call karo
    second method is ka header and footer fix kerdo and content in-between ko dynamic kerdo

    second method ka liya outlet use hota ha jo jahan use hoga wo cheez update hogi baqi same rahay gi

*/