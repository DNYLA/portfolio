import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  image: string;
  href: string;
}

const Card = ({ title, image, href }: CardProps) => {
  return (
    <div className="flex flex-col cursor-pointer hover:scale-110 transition group items-center">
      <Image
        className="border-solid max-w-[175px] inline-block rounded hover:skew-y-2 hover:skew-x-4"
        src="https://avatars.githubusercontent.com/u/22224922?v=4"
        width={175}
        height={175}
        alt="Profile Image"
      />
      <span className="text-neutral-300 ">{title}</span>
    </div>
  );
};

export default Card;
