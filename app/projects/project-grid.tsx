'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './project-card';

const ProjectGrid = () => {
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-3 p-10 gap-3"
    >
      {Array(4)
        .fill(null)
        .map((item, i) => (
          <ProjectCard
            key={i}
            title="Project 1"
            image="https://insidescientific.com/wp-content/uploads/2021/05/LabMaker.jpg"
            href="/projects?id=labmaker"
            delay={i * 0.2}
          />
        ))}
    </motion.div>
  );
};

export default ProjectGrid;
