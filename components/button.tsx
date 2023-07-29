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
        'cursor-pointer rounded bg-emerald-500 p-2 text-sm text-black hover:rounded-md hover:bg-emerald-400',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
