'use client';
import IconButton from '@/components/icon-button';
import { Project } from '@/lib/types';
import Link from 'next/link';
import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';

interface TagContainerProps {
  data: Project;
}

const TagContainer = ({ data }: TagContainerProps) => {
  const TagTitle = (title: string) => {
    return (
      <span className="mr-1 items-end rounded bg-green-700 px-2 py-1 text-center text-xs font-bold uppercase text-green-200">
        {title}
      </span>
    );
  };

  /* Should i create them like this: NO; do i know how to align them together as individual componenets: NO (someone help 😭) */
  return (
    <div className="flex">
      <div className="flex flex-col items-end gap-y-2">
        {TagTitle('Year')}
        {TagTitle('Website')}
        {TagTitle('Platform')}
        {TagTitle('Stack')}
        {TagTitle('Github')}
      </div>

      <div className="ml-2 flex flex-col gap-y-2">
        <p className="flex text-base font-light">{data.year}</p>
        <p className="flex text-base font-light">{data.website ?? 'N/A'}</p>
        <p className="flex text-base font-light">{data.platform}</p>
        <p className="flex text-base font-light">{data.stack}</p>
        <Link
          className="flex text-base font-light underline hover:text-teal-300 hover:no-underline"
          href={data.repo}
          target="_blank"
        >
          {data.repo}
        </Link>
      </div>
    </div>
  );
};

export default TagContainer;
