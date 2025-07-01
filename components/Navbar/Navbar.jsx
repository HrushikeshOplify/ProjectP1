"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoginButton from "../LoginButton";
const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-white fixed w-full font-medium  shadow-lg top-0 left-0 z-50  ">
        <div className="flex justify-between max-w-[1440px] mx-auto h-20 items-center px-5 md:px-20  ">
          {/* Logo and Mobile Menu  */}
          <div className="">
            <Link href="/">
              <Image
                src="/BooksPeLogo.svg"
                width={160}
                height={60}
                alt="Logo"
                className="w-full h-auto "
              />
            </Link>
          </div>

          <div
            className="text-3xl text-gray-800 md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          {/* desktop */}
          <div className="hidden md:flex gap-3 item-center ">
            <ul className="flex gap-3 text-gray-800 ">
              <li className="hover:bg-violet-200 hover:text-violet-500 rounded-md text-center px-3 py-2">
                <Link href={"/"}>Home</Link>{" "}
              </li>
              <li className="hover:bg-violet-200 hover:text-violet-500 rounded-md text-center px-3 py-2">
                <Link href={"request-demo"}>Request demo</Link>
              </li>
              <li className="hover:bg-violet-200 hover:text-violet-500 rounded-md text-center px-3 py-2">
                <Link href={"product"}>Product</Link>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </li>
              <li className="hover:bg-violet-200 hover:text-violet-500 rounded-md text-center px-3 py-2">
                <Link href={"support"}>Support</Link>
              </li>
            </ul>

            <div className="hidden md:block">
              <LoginButton />
            </div>
          </div>
          {/* desktop */}

          <ul
            className={`md:hidden bg-white fixed w-3/4 
               top-20 right-0 h-full overflow-y-auto py-6 px-4 transition all 
               duration-500 ${open ? "right-0" : "right-[-100%]"}`}
          >
            <li
              className="hover:bg-violet-200 hover:text-violet-500 rounded-md text-left px-3 py-2"
              onClick={() => setOpen(!open)}
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              className="hover:bg-violet-200 hover:text-violet-500 rounded-md text-left px-3 py-2"
              onClick={() => setOpen(!open)}
            >
              <Link href={"request-demo"}>Request demo</Link>
            </li>
            <li
              className="hover:bg-violet-200 hover:text-violet-500 rounded-md text-left px-3 py-2"
              onClick={() => setOpen(!open)}
            >
              <Link href={"product"}>
                Product <ion-icon name="chevron-down-outline"></ion-icon>
              </Link>
            </li>
            <li
              className="hover:bg-violet-200 hover:text-violet-500 rounded-md text-left px-3 py-2"
              onClick={() => setOpen(!open)}
            >
              <Link href={"support"}>Support</Link>
            </li>
            <div className="mt-2">
              <span
              onClick={() => setOpen(!open)}
              ><LoginButton /></span>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
