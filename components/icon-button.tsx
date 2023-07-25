import React from 'react';
import { twMerge } from 'tailwind-merge';

interface IconButtonProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const IconButton = ({
  children,
  icon,
  className,
  onClick,
}: IconButtonProps) => {
  //Should i create a handle click function here then check if onClick exists before calling?

  return (
    <button
      onClick={onClick}
      className={twMerge(
        'inline-flex bg-inherit rounded items-center text-white group',
        className
      )}
    >
      <div className="flex rounded-l bg-[#315bdd] items-center p-1 h-full">
        <span className="group-hover:scale-110">{icon}</span>
      </div>
      <span className="flex rounded-r bg-[#1d1d1d] items-center px-4 p-1 h-full text-sm">
        {children}
      </span>
    </button>
  );
};

export default IconButton;
