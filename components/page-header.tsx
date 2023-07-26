'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface PageHeaderProps {
  children: React.ReactNode;
}

const PageHeader = ({ children }: PageHeaderProps) => {
  return (
    <div className="flex flex-col gap-2 w-full align-middle text-center items-center justify-center">
      <h1 className="text-4xl">Danyaal Ahmed</h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-xl text-left"
      >
        {title}
      </motion.h1>
    </div>
  );
};

// const PageHeader = ({ title }: PageHeaderProps) => {
//   return (
//     <div className="flex flex-col xl:flex-row gap-8 w-full align-middle text-center items-center justify-center">
//       {/* <h1 className="text-4xl break-all w-[130px] text-left">Danyaal Ahmed</h1> */}
//       <h1 className="text-3xl">{title}</h1>
//       {/* <motion.div
//         initial={{ rotate: 0 }}
//         animate={{ rotate: 1080 }}
//         transition={{ duration: 0.9, delay: 0 }}
//       >
//         <Image
//           className="border-white border-solid border-2 max-w-[100px] inline-block rounded-full z-0"
//           src="https://avatars.githubusercontent.com/u/22224922?v=4"
//           width={100}
//           height={100}
//           alt="Profile Image"
//         />
//       </motion.div> */}
//     </div>
//   );
// };

export default PageHeader;
