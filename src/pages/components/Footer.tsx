import React from 'react'
import Image from 'next/image';
import { FaLine } from "react-icons/fa";
import Link from 'next/link';
type Props = {}

const Footer =(props:Props) => {
    return (
      <footer className="ft">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-2 md:mb-0">
                
            </div>
            <div className="sm: grid pl-10 grid-cols-1 gap-8 md:gap-10 md:grid-cols-3 ft-grid">
                <div>
                    <h2 className="mb-6  text-sm font-semibold text-ft uppercase ">ที่อยู่</h2>
                    <p className='text-white'>143/5-6 ม.4 ถ.สุขสวัสดิ์ ต.บางพึ่ง อ.พระประแดง จ.สมุทรปราการ 10130</p>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-ft uppercase ">ติดต่อเรา</h2>
                    <p className='text-white'>Email: sermsirial@hotmail.com  <br /> Phone: 086-569-2289</p>
                </div>
                <div>
                    <h2 className=" pb-12 text-sm font-semibold text-ft uppercase ">ติดตามเรา</h2>
                   // <ul className="text-gray-500 dark:text-gray-400 font-medium">
                   // <div className='flex'>
                   // <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    //<svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                    //      <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    //  </svg>
                  // <span className="sr-only">Facebook page</span>
               // </Link>
               // <Link href="/">
               // <FaLine />

               // </Link>
                
                   // </div>
                
                  //  </ul> 
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">Sermsiri Aluminum & Stainless</Link>. All Rights Reserved.
            </span>
            
        </div>
      </div>
  </footer>
      );
};

export default  Footer; 
