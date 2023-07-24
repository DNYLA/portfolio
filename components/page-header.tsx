'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="flex flex-row justify-between w-full align-middle text-center items-center">
      <h1 className="text-4xl break-all w-[130px] text-left">Danyaal Ahmed</h1>
      <h1 className="text-3xl">{title}</h1>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 1080 }}
        transition={{ duration: 0.9, delay: 0 }}
      >
        <Image
          className="border-white border-solid border-2 max-w-[100px] inline-block rounded-full"
          src="https://avatars.githubusercontent.com/u/22224922?v=4"
          width={100}
          height={100}
          alt="Profile Image"
        />
      </motion.div>
    </div>
  );
};

export default PageHeader;
