// pages/product/[id].tsx
import Header from "../components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { stainlessProducts } from "../components/productsData";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Head from "next/head";
export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const product = stainlessProducts.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
    <Head>
        <title>รายละเอียด : {product.title} | เสริมศิริ อลูมินั่ม & สแตนเลส</title>
        <meta name="description" content="สแตนเลส" />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content="เสริมศิริ ครบเครื่องเรื่องสแตนเลส" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/nav.png" type="icon" />
      </Head>
    <Header />
    <Link href="/stainless/products"
    className="text-xl text-center font-bold back-products  "
    >สแตนเลส</Link>
       <div className="bg-white">
      <div className="pt-6">
        

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            
            
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <Image
             width={500}
             height={500}
              src={product.src}
              alt={product.title}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
           
          </div>

          

          <div className="py-10 ">
           

            

            <div className="mt-10">
              <h2 className="text-xl text-center font-bold text-gray-2000 ">รายละเอีดสินค้า</h2>
              <div className="line" style={{margin:"5px auto"}}></div>

              <div className="mt-4 space-y-6">
                <p className="text-lg text-gray-800">{product.detail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
