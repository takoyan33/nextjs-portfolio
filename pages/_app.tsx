import '../styles/styles.css'
// import '../styles/global.css'
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
  faHtml5,
  faCss3,
  faReact,
  faVuejs,
  faUnity,
  faJs,
  faPhp,
  faAws,
  faGithub,
  faBitbucket,
  faFigma,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons'
import { faGem } from '@fortawesome/free-regular-svg-icons'
import { faCamera, faFire } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faHtml5)

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
