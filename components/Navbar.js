/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Image from 'next/image';
import NavLogo from './NavLogo';
import Nav from './Nav';
import Button from './Button';
import classNames from 'classnames';

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);
  return (
    <>
      <div className="flex items-center py-12 md:py-10">
        <div className="w-full lg:w-3/12">
          <NavLogo />
        </div>
        <div className="hidden w-6/12 md:block">
          <Nav dir="horizontal" scheme="light" />
        </div>
        <div className="hidden w-3/12 text-right md:block md:pl-10">
          <Button
            href="https://wa.me/085940476706"
            target="__blank"
            pill
            variant="outline-yellow"
          >
            Contact
          </Button>
        </div>
        <div className="w-9/12 px-5 text-right md:hidden">
          <Image
            src="/menu.svg"
            height={24}
            width={24}
            alt="menu"
            onClick={() => setOffCanvas(true)}
          />
        </div>
      </div>

      <div
        className={classNames(
          'fixed top-0 z-10 h-full w-full bg-white px-10 py-12 transition-all md:hidden',
          offCanvas ? 'right-0' : '-right-full'
        )}
      >
        <img
          src="/x.svg"
          alt="menu-close"
          className="absolute top-11 right-10 w-8 sm:right-20"
          onClick={() => setOffCanvas(false)}
        />
        <Nav dir="vertical" scheme="dark" />
      </div>
    </>
  );
}
