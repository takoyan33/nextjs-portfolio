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

      <div className='contact max_width'>
        <ContactForm />
      </div>

      <Footer />
    </>
  )
}
