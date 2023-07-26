'use client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/select';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  data: string[];
};

const ProjectSelect = ({ data }: Props) => {
  const router = useRouter();
  const path = usePathname().split('/')[2];
  data.forEach((name) => console.log(path === name));

  const handleRedirect = (project: string) => {
    router.push(`/projects/${project.toLowerCase()}`);
  };

  return (
    <Select defaultValue={path.toLowerCase()} onValueChange={handleRedirect}>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Projects</SelectLabel>
          {data.map((name) => (
            <SelectItem key={name} value={name.toLowerCase()}>
              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ProjectSelect;
