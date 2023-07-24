import React from 'react';
import NextLink from 'next/link';
interface NavItemProps {
  href: string;
  path: string;
  children: React.ReactNode;
}

const NavItem = ({ href, path, children }: NavItemProps) => {
  const active = path === href;

  return (
    <NextLink href={href}>
      <span className={active ? 'red' : 'blue'}>{children}</span>
    </NextLink>
  );
};

const Navbar = () => {
  return (
    <div className="bg-neutral-900 fixed w-full">
      <div className="p-2 container flex mx-auto justify-center gap-x-8">
        <h1 className="text-2xl cursor-pointer hover:opacity-75 transition">
          Danyaal Ahmed
        </h1>
        <div className="flex gap-x-3 items-center text-base">
          <span>Projects</span>
          <span>Log</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
