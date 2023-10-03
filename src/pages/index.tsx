import React from 'react';
// import  MainSlide from './components/MainSlide';
import Head from 'next/head';
import dynamic from 'next/dynamic';

type Props = {};


const MainContent = dynamic(() => import('./components/MainContent'), {
  loading: () => <div className="animate-pulse "></div>,
  ssr: false,
});

const Banner = dynamic(() => import('./components/Banner'), {
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


export default function Home({}: Props) {
  return (
    <>
      <Head>
        <title>หน้าแรก | เสริมศิริ อลูมินั่ม & สแตนเลส</title>
        {/* <meta name="description" content="เราเป็นศูนย์รวมอลูมิเนียมเส้น และสแตนเลส อุปกรณ์งานติดตั้งประตู-หน้าต่างกรอบอลูมิเนียมที่เกี่ยวข้องทุกชนิด" />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content="เสริมศิริ ครบเครื่องเรื่องบ้าน" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <link rel="icon" href="/nav.png" type="icon" />
      </Head>
   
      <Header />
      <Banner />
      <MainContent />
      {/* <MainSlide/> */}
      <br /><br />
      
      <Footer />
    </>
  );
}
