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
        'mb-2 text-lg font-bold tracking-widest underline decoration-neutral-300 decoration-2 underline-offset-4',
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Heading;
