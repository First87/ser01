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
    <link
        rel = "icon"
         href = "/nav.png" 
        type = "icon">
    </link>
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
