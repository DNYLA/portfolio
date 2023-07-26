'use client';
import React from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
interface NavItemProps {
  href: string;
  path: string;
  children: React.ReactNode;
}

const NavItem = ({ href, path, children }: NavItemProps) => {
  const active = href === path;
  const backCol = active ? 'bg-red-300' : 'bg-pink-300';

  return (
    <NextLink
      href={href}
      className={`hover:opacity-50 hover:scale-[115%] scale-100 transition-all`}
    >
      <span className={``}>{children}</span>
    </NextLink>
  );
};

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="fixed w-full h-[50px] top-0 z-10">
      <div className="p-2 container flex mx-auto justify-center gap-x-8 backdrop-blur-3xl">
        <Link href={'/'}>
          <h1 className="text-2xl font-medium cursor-pointer hover:opacity-75 transition ">
            Danyaal Ahmed
          </h1>
        </Link>
        <div className="flex gap-x-3 items-center text-base">
          <NavItem href="/projects" path={path}>
            Projects
          </NavItem>
          <NavItem href="/log" path={path}>
            Log
          </NavItem>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
