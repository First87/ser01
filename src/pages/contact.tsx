import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
type Props = {}

type State = {}

const ContactContent = dynamic(() => import('./components/ContactContent'), {
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

class contact extends Component<Props, State> {
  state = {}

  render() {
    return (
     <>
     <Head>
    <title>ติดต่อเรา | เสริมศิริ อลูมินั่ม & สแตนเลส</title>
        {/* <meta name="description" content="บริษัท เสริมศิริ อลูมินั่ม และสแตนเลส จำกัด จำหน่ายอลูมิเนียม สแตนเลสครบวงจร เครื่องครัวสแตนเลส กระจก ฝ้าเพดาน แผ่นยิปซั่ม สมาร์ทบอร์ด แผ่น เพลา ฉาก เกรด 304 ขายมานานกว่า 20 ปี โดยบริษัทมีจุดมุ่งหมายในการตอบสนองความต้องการของลูกค้าและส่งมอบความพึงพอใจอย่างสูงสุดทั้งก่อนและหลังสำหรับออนไลน์" />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content="เสริมศิริ เราพร้อมส่งทั่วไทย" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
    <link rel = "icon" href = "nav.png" type = "icon" />
    
    </Head>
     <Header/>
     <ContactContent/>
     <Footer/>
     </>
    )
  }
}

export default contact