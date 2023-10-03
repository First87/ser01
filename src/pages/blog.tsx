import React, { Component } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
type Props = {}

type State = {}

const BlogContent = dynamic(() => import('./components/BlogContent'), {
  loading: () => <div className="animate-pulse "></div>,
  ssr: false,
});


const Footer = dynamic(() => import('./components/Footer'), {
  loading: () => <div className="animate-pulse "></div>,
  ssr: false,
});

const Header = dynamic(() => import('./components/Header'), {
  loading: () => <div className="animate-pulse "></div>,
  ssr: false,
});

class blog extends Component<Props, State> {
  state = {}

  render() {
    return (
      <>
      <Head>
    <title>สาระน่ารู้ | เสริมศิริ อลูมินั่ม & สแตนเลส</title>
    {/* <meta name="description" content="เสริมศิริ อลูมินั่ม & สแตนเลส" />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content="เสริมศิริ เราพร้อมส่งทั่วไทย" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
    <link rel = "icon" href = "nav.png" type = "icon" />
 
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