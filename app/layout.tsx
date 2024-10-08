import '../styles/styles.css'
import React from 'react'
import { RecoilRoot } from 'recoil'
import Header from '../components/Components/ui/Header'
import Footer from '../components/Components/ui/Footer'
import type { NextPage } from 'next'

export const metadata = {
  title: 'To You Design',
  description: 'Generated by Next.js',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ja'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
