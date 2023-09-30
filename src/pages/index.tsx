import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Banner from './components/Banner';
import MainContent from './components/MainContent';
// import  MainSlide from './components/MainSlide';
import Head from 'next/head';

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <Head>
        <title>หน้าแรก | เสริมศิริ อลูมินั่ม & สแตนเลส</title>
        <meta name="description" content="เราเป็นศูนย์รวมอลูมิเนียมเส้น และสแตนเลส อุปกรณ์งานติดตั้งประตู-หน้าต่างกรอบอลูมิเนียมที่เกี่ยวข้องทุกชนิด" />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content="เสริมศิริ ครบเครื่องเรื่องบ้าน" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
