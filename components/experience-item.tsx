import React from 'react';

interface ExperienceItemProps {
  year: string;
  children: React.ReactNode;
}

const ExperienceItem = ({ year, children }: ExperienceItemProps) => {
  return (
    <div className="flex items-center gap-4">
      <h1 className="indent-8 text-[18px] font-semibold">{year}</h1>
      <span className="max-w-[75%] text-[16px] font-light">{children}</span>
    </div>
  );
};

export default ExperienceItem;
