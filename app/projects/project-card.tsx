'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  image: string;
  href: string;
  delay?: number;
}

const ProjectCard = ({ title, image, href, delay }: CardProps) => {
  console.log(delay);
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

  return (
    <motion.div
      className="flex flex-col rounded-md bg-[#202023] cursor-pointer group hover:bg-[#313134] hover:scale-150 hover:skew-y-2 transition items-center pt-4 p-2"
      variants={variant}
    >
      <Image
        className="border-solid max-w-[175px] rounded inline-block  group-hover:scale-110"
        src="https://avatars.githubusercontent.com/u/22224922?v=4"
        width={175}
        height={175}
        alt="Profile Image"
      />
      <span className="text-neutral-300 group-hover:scale-110 mt-2">
        {title}
      </span>
    </motion.div>
  );
};

export default ProjectCard;
