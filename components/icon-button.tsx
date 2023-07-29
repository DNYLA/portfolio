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
        'group inline-flex items-center rounded bg-inherit text-white',
        className
      )}
    >
      <div className="flex h-full items-center rounded-l bg-[#315bdd] p-1">
        <span className="group-hover:scale-110">{icon}</span>
      </div>
      <span className="flex h-full items-center rounded-r bg-[#1d1d1d] p-1 px-4 text-sm">
        {children}
      </span>
    </button>
  );
};

export default IconButton;
