import React from "react"
import Image from "next/image"
import { accessoriesstainlessProducts } from '../components/productsData'
import Link from "next/link"

export default function Example() {
  return (
    <>
    
    <Link href="/products"
    className="text-xl text-center font-bold back-products  "
    >หมวดหมู่สินค้า</Link>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center p-6">อุปกรณ์ตกแต่งสแตนเลส</h2>
        <div className="line" style={{margin:"5px auto"}}></div>
        <div className="mt-6 md:grid md:gap-6 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {accessoriesstainlessProducts.map((product) => (
            <Link key={product.id} href={`/accessoriesstainless/${product.id}`}>
              
              <div
                className=" card-po aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-contain img-po"
                  style={{
                    backgroundImage: `url(${product.src})`,
                    width: '300px',
                    height: '300px',
                  }}
                ></div>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
              {product.title.length > 35? `${product.title.substring(0, 35)}...` : product.title}
              </h3>
              
             
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
    
  )
}