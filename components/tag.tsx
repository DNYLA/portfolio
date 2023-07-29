import React from 'react';

interface TagProps {
  title: string;
  children: React.ReactNode;
}

const Tag = ({ title, children }: TagProps) => {
  return (
    <div className="flex items-start gap-x-3 text-center align-middle">
      <span className="mr-1 flex items-start rounded bg-green-700 px-2 py-1 text-xs font-bold uppercase text-green-200">
        {title}
      </span>
      <div className="flex self-center text-base font-light">{children}</div>
    </div>
  );
};

export default Tag;
