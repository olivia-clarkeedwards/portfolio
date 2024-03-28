import { Outlet } from '@remix-run/react'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import { title } from '~/data/data.json'

function MainLayout() {
  return (
    <div className="h-full inset-1 ">
      <Header title={title} />
      <Outlet />
      <Footer title={title} />
    </div>
  )
}

export default MainLayout
