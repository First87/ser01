import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardProducts from './Stainless';
import Head from 'next/head';



const ProductsPage = () => {
  return (
    <div>
      <Head>
        <title>สแตนเลส | เสริมศิริ อลูมินั่ม & สแตนเลส</title>
        <meta name="description" content="สแตนเลส" />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content="เสริมศิริ ครบเครื่องเรื่องสแตนเลส" />
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
