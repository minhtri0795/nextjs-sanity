
'use client'
import Head from 'next/head'
import { Metadata } from 'next'
import { NextStudio } from 'next-sanity/studio'
import { NextStudioHead } from 'next-sanity/studio/head'
import { StudioLayout, StudioProvider } from 'sanity'
import config from 'sanity.config'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle(({ theme }) => ({
  html: { backgroundColor: theme.sanity.color.base.bg },
}))

export const metadata: Metadata = {
    title: 'Sanity studio',
  }  
export default function StudioPage() {
  return (
    <>
      <NextStudio config={config}>
        <StudioProvider config={config}>
          <GlobalStyle />
          <StudioLayout />
        </StudioProvider>
      </NextStudio>
    </>
  )
}
