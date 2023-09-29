import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import BlogContent from './components/BlogContent'
import Head from 'next/head'
type Props = {}

type State = {}

class blog extends Component<Props, State> {
  state = {}

  render() {
    return (
      <>
      <Head>
    <title>สาระน่ารู้ | เสริมศิริ อลูมินั่ม & สแตนเลส</title>
    <link
        rel = "icon"
         href = "nav.png" 
        type = "icon">
    </link>
    </Head>
        <Header/>
        <BlogContent/>
        <br /><br />
        <Footer/>
      </>
    )
  }
}

export default blog