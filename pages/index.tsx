import Head from 'next/head'
import Footer from '../components/Components/ui/Footer'
import Header from '../components/Components/ui/Header'
import Main from '../components/Main'
import React from 'react'
import Script from 'next/script'
// import MoonLoader from 'react-spinners/MoonLoader'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>To You Design</title>
        <link rel='icon' href='/favicon.ico' />
        <Script
          src='https://kit.fontawesome.com/bb61864944.js'
          crossOrigin='anonymous'
          strategy='afterInteractive'
        />
        <meta name='google' content='nositelinkssearchbox' key='sitelinks' />
        <meta name='google' content='notranslate' key='notranslate' />
      </Head>
      <Header />
      {/* <MoonLoader /> */}
      <Main />
      <Footer />
    </div>
  )
}
