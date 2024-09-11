import '../styles/styles.css'
// import '../styles/global.css'
import React from 'react'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
