import React from 'react';

interface ExperienceItemProps {
  year: string;
  children: React.ReactNode;
}

const ExperienceItem = ({ year, children }: ExperienceItemProps) => {
  return (
    <div className="flex gap-4 items-center">
      <h1 className="indent-8 text-[18px] font-semibold">{year}</h1>
      <span className="font-light text-[16px] max-w-[75%]">{children}</span>
    </div>
  );
};

export default ExperienceItem;
