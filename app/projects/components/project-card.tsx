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
			className="group flex cursor-pointer flex-col items-center rounded-md bg-[#202023] p-2 pt-4 transition hover:skew-y-2 hover:scale-150 hover:bg-[#313134]"
			variants={variant}
			onClick={handleClick}
		>
			<Image
				className="inline-block max-w-[175px] rounded border-solid  group-hover:scale-110"
				src={project.cover ?? '/images/no-image.jpg'}
				alt="Profile Image"
				// style={{ objectFit: 'contain' }}
				width={175}
				height={175}
			/>
			<span className="mt-2 text-neutral-300 group-hover:scale-110">
				{project.name}
			</span>
		</motion.div>
	);
};

export default ProjectCard;
