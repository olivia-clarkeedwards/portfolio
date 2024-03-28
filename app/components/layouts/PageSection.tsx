import { ReactNode } from 'react'

type PageSectionProps = {
  children: ReactNode
}

export function PageSection({ children }: PageSectionProps) {
  return <div className="bg-white w-full first:mt-32">{children}</div>
}
