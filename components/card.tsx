'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface CardProps {
  title: string;
  src: string;
  href: string;
  delay?: number;
}

const Card = ({ title, src, href, delay }: CardProps) => {
  console.log(delay);
  const router = useRouter();
  const variant = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        ease: 'linear',
        duration: 2,
        x: { duration: 1 },
      },
    },
    hidden: { opacity: 0, x: 0, y: -20 },
  };

  const handleClick = () => {
    router.push(href);
  };

  return (
    <motion.div
      className="group flex cursor-pointer flex-col items-center transition hover:scale-110"
      variants={variant}
      onClick={handleClick}
    >
      <Image
        className="hover:skew-x-4 inline-block  max-w-[175px] rounded border-solid hover:skew-y-2"
        src={src}
        width={175}
        height={175}
        alt="Profile Image"
      />
      <span className="text-neutral-300 ">{title}</span>
    </motion.div>
  );
};

export default Card;
