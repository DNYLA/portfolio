'use client';
import { Project } from '@/lib/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface CardProps {
  project: Project;
  delay?: number;
}

const ProjectCard = ({ project, delay }: CardProps) => {
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
    router.push(`projects/${project.name.toLowerCase()}`);
  };

  return (
    <motion.div
      className="flex flex-col rounded-md bg-[#202023] cursor-pointer group hover:bg-[#313134] hover:scale-150 hover:skew-y-2 transition items-center pt-4 p-2"
      variants={variant}
      onClick={handleClick}
    >
      <Image
        className="border-solid max-w-[175px] rounded inline-block  group-hover:scale-110"
        src={
          project.images.length > 0
            ? project.images[0]
            : 'https://avatars.githubusercontent.com/u/22224922?v=4'
        }
        width={200}
        height={200}
        alt="Profile Image"
        style={{ objectFit: 'cover' }}
      />
      <span className="text-neutral-300 group-hover:scale-110 mt-2">
        {project.name}
      </span>
    </motion.div>
  );
};

export default ProjectCard;
