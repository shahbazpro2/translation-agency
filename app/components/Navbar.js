/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../public/assets/logo.png";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "#service" },
  { name: "Contact Us", path: "#contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  const router = null;
  return (
    <div className="shadow-lg fixed w-full bg-white z-40">
      <div className="container">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-5">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-between py-5">
                    <Link href="/" className="flex justify-center items-center gap-3">
                      <Image src={logo} alt="Logo" width={120} height={120} />
                    </Link>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4 items-center h-full">
                        {links.map((item) => (
                          <Link
                            key={item.name}
                            href={item.path}
                            className={classNames(item.current ? " text-primary" : "text-black hover:text-primary ", "rounded-md px-3 py-2 text-base font-medium cursor-pointer")}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden bg-white rounded-lg">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {links.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      href={item.path}
                      className={classNames(item.current ? " text-primary" : "text-black hover:text-primary", "block rounded-md px-3 py-2 text-base font-medium cursor-pointer")}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Header;
