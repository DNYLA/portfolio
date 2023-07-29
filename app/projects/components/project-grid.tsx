'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './project-card';
import { Project } from '@/lib/types';

type Props = {
	projects: Project[];
};

const ProjectGrid = ({ projects }: Props) => {
	const variants = {
		visible: {
			opacity: 1,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.2,
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
			className="grid grid-cols-1 gap-3 p-10 py-3 sm:grid-cols-2 lg:grid-cols-3"
		>
			{projects.map((item, i) => (
				<ProjectCard key={i} project={item} delay={i * 0.05} />
			))}
		</motion.div>
	);
};

export default ProjectGrid;
