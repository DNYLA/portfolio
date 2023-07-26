import React from 'react';

interface TagProps {
  title: string;
  children: React.ReactNode;
}

const Tag = ({ title, children }: TagProps) => {
  return (
    <div className="flex text-center align-middle gap-x-3 items-start">
      <span className="flex items-start uppercase text-xs font-bold mr-1 px-2 py-1 rounded bg-green-700 text-green-200">
        {title}
      </span>
      <div className="flex self-center font-light text-base">{children}</div>
    </div>
  );
};

export default Tag;
