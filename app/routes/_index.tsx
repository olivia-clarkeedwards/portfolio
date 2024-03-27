import type { MetaFunction } from '@remix-run/node'
import { Link, Outlet } from '@remix-run/react'
import Footer from '~/components/Footer'
import Header from '~/components/Header'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function LandingPage() {
  return (
    <div>
      <Link to="/home">Enter site</Link>
    </div>
  )
}
