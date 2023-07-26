import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'text-sm cursor-pointer rounded hover:rounded-md bg-emerald-500 p-2 hover:bg-emerald-400 text-black',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
