import Header from '../components/Components/ui/Header'
import Footer from '../components/Components/ui/Footer'
import ContactForm from '../components/Components/ui/ContactForm'
import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>To You Design - Contact</title>
      </Head>
      <Header />

      <h1>Contact</h1>

      <ContactForm />

      <Footer />
    </>
  )
}
