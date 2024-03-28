import EmailSignUp from './EmailSignUp'
import Navigation from './Navigation'
import { FullWidthTitle } from './FullWidthTitle'

type FooterProps = {
  title: string
}

function Footer({ title }: FooterProps) {
  return (
    <footer className="bg-stone-400 w-full">
      <div className="flex-grid grid grid-rows-2">
        <div className="flex justify-between px-10 py-8">
          <EmailSignUp />
          <Navigation
            orientation="vertical"
            color="onDark"
            className="items-end py-4"
          />
        </div>
        <FullWidthTitle title={title} />
      </div>
    </footer>
  )
}

export default Footer
