import React, { Component } from 'react'
import ContactContent from './components/ContactContent'
import Footer from './components/Footer'
import Header from './components/Header'
import Head from 'next/head'
type Props = {}

type State = {}

class contact extends Component<Props, State> {
  state = {}

  render() {
    return (
     <>
     <Head>
    <title>ติดต่อเรา | เสริมศิริ อลูมินั่ม & สแตนเลส</title>
    <link
        rel = "icon"
         href = "nav.png" 
        type = "icon">
    </link>
    </Head>
     <Header/>
     <ContactContent/>
     <Footer/>
     </>
    )
  }
}

export default contact