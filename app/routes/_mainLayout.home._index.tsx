import { FullWidthImage } from '~/components/FullWidthImage'
import { FullWidthTitle } from '~/components/FullWidthTitle'
import { ImageWithCaption } from '~/components/ImageWithCaption'
import { PageSection } from '~/components/layouts/PageSection'
import { title } from '~/data/data.json'

function HomePage() {
  return (
    <>
      <PageSection>
        <div className="mt-36">
          <FullWidthTitle title={title} color="onLight" />
          <FullWidthImage
            src="/images/LouisAndJack.png"
            alt="Louis and Jack at camp"
          />
        </div>
      </PageSection>
      <PageSection>
        <div className="px-8 py-32 bg-stone-200 flex flex-col gap-6">
          <h2 className="text-4xl">Selected works</h2>
          <div className="grid grid-cols-3 gap-6">
            <ImageWithCaption
              src="/images/WhatMore.png"
              alt="Film photo of band in tent"
              caption="What more can we learn about music?"
            />
            <ImageWithCaption
              src="/images/Dance.png"
              alt="Film photo of band in tent"
              caption="Peak of the Empire, top of the rock"
            />
            <ImageWithCaption
              src="/images/SmileYrOnCamera.png"
              alt="Film photo of band in tent"
              caption="Gargoyles, garglin' oil"
            />
          </div>
        </div>
      </PageSection>
    </>
  )
}

export default HomePage
