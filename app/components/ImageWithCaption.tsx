type ImageWithCaptionProps = {
  src: string
  alt: string
  caption: string
}

export function ImageWithCaption({ src, alt, caption }: ImageWithCaptionProps) {
  return (
    <div className="flex flex-col gap-4">
      <img src={src} alt={alt} />
      {caption}
    </div>
  )
}
