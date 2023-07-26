import { getProjectNames } from '@/app/actions';
import ProjectSelect from '@/app/projects/[id]/project-select';
import PageHeader from '@/components/page-header';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/select';
import Link from 'next/link';

export const dynamicParams = false; //Any item not prefetched above is incorrect

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <PageHeader>
        {/* Breadcrumb from https://preline.co/docs/breadcrumb.html# */}
        <Breadcrumb />
      </PageHeader>
    </div>
  );
}

import React from 'react';

const Breadcrumb = async () => {
  const projectNames = await getProjectNames();

  return (
    <ol
      className="flex items-center whitespace-nowrap min-w-0"
      aria-label="Breadcrumb"
    >
      <li className="text-sm">
        <Link
          className="flex items-center text-gray-500 hover:text-blue-600"
          href={'/projects'}
        >
          Projects
          <svg
            className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </Link>
      </li>
      <li
        className="text-sm font-semibold text-gray-800 truncate dark:text-gray-200"
        aria-current="page"
      >
        <ProjectSelect data={projectNames} />
      </li>
    </ol>
  );
};

export async function generateStaticParams() {
  const projects = await getProjectNames();

  return projects.map((name) => ({
    id: name.toLowerCase(),
  }));
}
