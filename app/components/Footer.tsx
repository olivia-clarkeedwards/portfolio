import { useEffect, useState } from 'react'
import EmailSignUp from './EmailSignUp'
import Navigation from './Navigation'

type FooterProps = {
  title: string
}

function Footer({ title }: FooterProps) {
  return (
    <footer className="bg-stone-400 w-full fixed bottom-0 left-0">
      <div className="flex-grid grid grid-rows-2">
        <div className="flex justify-between px-10 py-8">
          <EmailSignUp />
          <Navigation
            orientation="vertical"
            color="onDark"
            className="items-end py-4"
          />
        </div>
        <div
          id="footer-title"
          className="text-white w-full text-center text-[12.5vw] tracking-widest leading-none"
        >
          {title}
        </div>
      </div>
    </footer>
  )
}

export default Footer
