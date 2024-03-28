import { NavLink } from '@remix-run/react'
import Navigation from './Navigation'

type HeaderProps = {
  title: string
}

function Header({ title }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 bg-white w-full flex items-center justify-between px-10 py-8 border border-b border-black">
      <NavLink to="/home">
        <p className="text-5xl tracking-wide">{title}</p>
      </NavLink>
      <Navigation />
    </header>
  )
}

export default Header
