import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardProducts from './Accessoriesstainless';
import Head from 'next/head';


const ProductsPage = () => {
  return (
    <div>
      
   
        <Header/>
        <CardProducts/>
        <Footer/>
    </div>
  );
};

export default ProductsPage;
