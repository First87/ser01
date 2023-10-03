import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Head from 'next/head';
import Image from "next/image";

const Footer = dynamic(() => import('./components/Footer'), {
  loading: () => <div className="animate-pulse"></div>,
  ssr: false,
});

const Header = dynamic(() => import('./components/Header'), {
  loading: () => <div className="animate-pulse"></div>,
  ssr: false,
});

export default function Products() {
  

  const callouts = [
    {
      name: 'อลูมิเนียม',
      imageSrc: 'https://drive.google.com/uc?export=download&id=1VQXMZBx00pj3Z01YzlTdbj2XYjrwYQA2',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '/aluminum/products',
      
    },
    {
      name: 'สแตนเลส',
      imageSrc: 'https://drive.google.com/uc?export=download&id=1ckIUbGN_irp3LH5423Zm5qeXggArYZCT',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '/stainless/products',
    },
    {
      name: 'กระจก',
     
      imageSrc: 'https://drive.google.com/uc?export=download&id=17qo7rkvdzQiNgF-yMw-Kku7OI51boAT4',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '/mirror/products',
    },
    {
        name: 'อุปกรณ์ตกแต่งสแตนเลส',
        imageSrc: 'https://drive.google.com/uc?export=download&id=1--OZSnB4rwp2k-H1UraMbQ_gV99tsl7b',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '/accessoriesstainless/products',
      },
      {
        name: 'งานฝ้าและเครื่องมือช่าง',
        imageSrc: 'https://drive.google.com/uc?export=download&id=1dvObmOuRkHZ3zXoDfDGkuN_8x6bCmVlK',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '/ceilingtools/products',
      },
      {
        name: 'แผ่นหลังคา',
        imageSrc: 'https://drive.google.com/uc?export=download&id=1APf67YYLdAstKc1e4IyUK6sDZiG8HKau',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '/roof/products',
      },
  ]

  return (
    <>
      <Head>
        <title>สินค้าของเรา | เสริมศิริ อลูมินั่ม & สแตนเลส</title>
        {/* <meta name="description" content="เรามีสินค้ามากมาย ไม่ว่าจะเป็น อลูมิเนียม สแตนเลส และอื่นๆอีกมากมาย " />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content="จำหน่ายและติดตั้งอลูมิเนียมเส้นและกระจก\ยิปชั่ม ปูนและวัสดุอุปกรณ์ก่อสร้าง" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <link rel="icon" href="nav.png" type="icon" />
      </Head>
      <Header />
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">หมวดหมู่สินค้า</h2>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <Image
                    width={100}
                    height={100}
                    sizes="100vw"
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <Link href={callout.href}>
                      
                        <span className="absolute inset-0"></span>
                        {callout.name}
                      
                    </Link>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
