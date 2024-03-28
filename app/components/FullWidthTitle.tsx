import { VariantProps, cva } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

const fullWidthTitleStyles = cva(
  ['w-full text-center text-[12.5vw] tracking-widest leading-none uppercase'],
  {
    variants: {
      color: {
        onLight: 'text-black',
        onDark: 'text-white',
      },
    },
    defaultVariants: {
      color: 'onLight',
    },
  }
)

type FullWidthTitleProps = VariantProps<typeof fullWidthTitleStyles> &
  ComponentPropsWithoutRef<'nav'> & { title: string }

export function FullWidthTitle({
  title,
  color,
  className,
}: FullWidthTitleProps) {
  return (
    <div className={twMerge(fullWidthTitleStyles({ color }), className)}>
      {title}
    </div>
  )
}
