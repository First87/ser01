import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Header = dynamic(() => import('../components/Header'), {
  loading: () => <div className="animate-pulse "></div>,
  ssr: false,
})

const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <div className="animate-pulse "></div>,
  ssr: false,
})
const CardProducts = dynamic(() => import('./Roof'), {
  loading: () => <div className="animate-pulse "></div>,
  ssr: false,
})



const ProductsPage = () => {
  return (
    <div>
      <Head>
        <title>แผ่นหลังคา | เสริมศิริ อลูมินั่ม & สแตนเลส</title>
        <meta name="description" content="แผ่นหลังคา" />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content="เสริมศิริ ครบเครื่องเรื่องหลังคา" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/nav.png" type="icon" />
      </Head>
        <Header/>
        <CardProducts/>
        <Footer/>
    </div>
  );
};

export default ProductsPage;
