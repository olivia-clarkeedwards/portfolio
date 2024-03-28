import { NavLink } from '@remix-run/react'
import { VariantProps, cva } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

const navigationStyles = cva(
  ['font-body flex gap-4 font-body uppercase text-sm font-light'],
  {
    variants: {
      orientation: {
        horizontal: [],
        vertical: ['flex-col'],
      },
      color: {
        onLight: 'text-black',
        onDark: 'text-white',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
      color: 'onLight',
    },
  }
)

type NavigationProps = VariantProps<typeof navigationStyles> &
  ComponentPropsWithoutRef<'nav'>

function Navigation({ orientation, color, className }: NavigationProps) {
  return (
    <nav
      className={twMerge(navigationStyles({ orientation, color }), className)}
    >
      <NavLink to="/works">Works</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export default Navigation
