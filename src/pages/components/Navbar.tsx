import Image from "next/image";
import Link from "next/link"; // Import the Link component from Next.js for client-side navigation.
import { useState } from "react"; // Import the useState hook from React for managing state.

export default function Navbar() {
  const [navbar, setNavbar] = useState(false); // Initialize a state variable 'navbar' and a function 'setNavbar' to manage it, with an initial value of 'false'.

  return (
    <div>
      <nav className="w-full bg-gray-800 shadow">
        {" "}
        {/* Create a navigation bar with background color and shadow */}
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          {" "}
          {/* Set the layout and spacing */}
          <div className="mobile-nav flex justify-between gap-5  ">
            <Image src="/nav.png" height={60} width={60} alt="logo"
            className="object-contain object-center"
            />
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                {" "}
                {/* Create a flex container for the logo and menu items */}
                <Link href="#">
                  <p className=" logo-text">
                    บริษัท เสริมศิริ อลูมินั่ม & สแตนเลส จำกัด
                  </p>
                </Link>
              </div>
              </div>

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)} // Create a button to toggle the mobile menu and set the 'navbar' state accordingly
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              {" "}
              {/* Create a menu that is hidden on larger screens */}
              <ul className="items-center  justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {" "}
                {/* Create a list of navigation links */}
                <li className="text-white">
                  <Link href="/">หน้าแรก</Link>
                </li>
                <li className="text-white">
                  <Link href="/products">สินค้าของเรา</Link>
                </li>
                <li className="text-white">
                  <Link href="/blog">สาระน่ารู้</Link>
                </li>
                <li className="text-white">
                  <Link href="/contact">ติดต่อเรา</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
