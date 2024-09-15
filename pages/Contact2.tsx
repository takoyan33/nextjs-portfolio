import Header from '../components/Components/ui/Header'
import Footer from '../components/Components/ui/Footer'
import ContactForm2 from '../components/Components/ui/ContactForm2'
import Head from 'next/head'

export default function Contact2() {
  return (
    <>
      <Head>
        <title>To You Design - Contact</title>
      </Head>
      <Header />

      <h1>Contact</h1>

      <ContactForm2 />

      <Footer />
    </>
  )
}
