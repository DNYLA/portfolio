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
      <span className="uppercase text-xs text-center font-bold mr-1 px-2 py-1 rounded bg-green-700 text-green-200 items-end">
        {title}
      </span>
    );
  };

  /* Should i create them like this: NO; do i know how to align them together as individual componenets: NO (someone help 😭) */
  return (
    <div className="flex">
      <div className="flex flex-col gap-y-2 items-end">
        {TagTitle('Year')}
        {TagTitle('Website')}
        {TagTitle('Platform')}
        {TagTitle('Stack')}
        {TagTitle('Github')}
      </div>

      <div className="flex flex-col gap-y-2 ml-2">
        <p className="flex font-light text-base">{data.year}</p>
        <p className="flex font-light text-base">{data.website ?? 'N/A'}</p>
        <p className="flex font-light text-base">{data.platform}</p>
        <p className="flex font-light text-base">{data.stack}</p>
        <Link
          className="flex font-light text-base hover:text-teal-300 "
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
