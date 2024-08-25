import Head from 'next/head'
import Footer from '../components/Components/ui/Footer'
import Header from '../components/Components/ui/Header'
import Main from '../components/Main'
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import Image from 'next/image'
// import MoonLoader from 'react-spinners/MoonLoader'

export default function Home() {
  const [showBackButton, setShowBackButton] = useState(false)

  const handleScroll = () => {
    setShowBackButton(window.scrollY > 150)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
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
      {showBackButton && (
        <button
          className='back__btn'
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <Image src='/images/top-arrow.svg' height={30} width={30} alt='arrow' />
        </button>
      )}
      <Footer />
    </div>
  )
}
