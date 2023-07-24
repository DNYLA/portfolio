import React from 'react';
import { twMerge } from 'tailwind-merge';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ children, className }: HeadingProps) => {
  return (
    <h1
      className={twMerge(
        'text-lg font-bold underline decoration-2 decoration-neutral-300 underline-offset-4 tracking-widest',
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Heading;
