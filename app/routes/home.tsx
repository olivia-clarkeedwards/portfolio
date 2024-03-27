import { Outlet } from '@remix-run/react'
import React from 'react'
import Footer from '~/components/Footer'
import Header from '~/components/Header'

function MainLayout() {
  return (
    <div className="h-full inset-1 bg-red-500">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
