import { Outlet } from '@remix-run/react'
import React from 'react'
import Footer from '~/components/Footer'
import Header from '~/components/Header'

const TITLE = 'OLIVIA GRACE'

function MainLayout() {
  return (
    <div className="h-full inset-1 bg-red-500">
      <Header title={TITLE} />
      <Outlet />
      <Footer title={TITLE} />
    </div>
  )
}

export default MainLayout
