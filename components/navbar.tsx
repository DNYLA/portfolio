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
      className={`scale-100 transition-all hover:scale-[115%] hover:opacity-50`}
    >
      <span className={``}>{children}</span>
    </NextLink>
  );
};

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="fixed top-0 z-10 h-[50px] w-full">
      <div className="container mx-auto flex justify-center gap-x-8 p-2 backdrop-blur-3xl">
        <Link href={'/'}>
          <h1 className="cursor-pointer text-2xl font-medium transition hover:opacity-75 ">
            Danyaal Ahmed
          </h1>
        </Link>
        <div className="flex items-center gap-x-3 text-base">
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
