import { NavLink } from '@remix-run/react'

function Header() {
  return (
    <div className="bg-white w-full flex items-center justify-between">
      <NavLink to="/home">
        <p className="text-5xl tracking-wide py-8 px-10">Olivia Grace</p>
      </NavLink>
      <div className="flex gap-4 px-10 font-body uppercase text-sm font-light">
        <NavLink to="/works">Works</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
  )
}

export default Header
