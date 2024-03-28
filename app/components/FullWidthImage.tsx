type FullWidthImageProps = {
  src: string
  alt: string
}

export function FullWidthImage({ src, alt }: FullWidthImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-[400px] object-cover object-bottom"
    />
  )
}
