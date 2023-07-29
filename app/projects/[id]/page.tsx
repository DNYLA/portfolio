import { getProjectByName, getProjectNames } from '@/app/actions';
import Image from 'next/image';
import React from 'react';
import { Project } from '@/lib/types';
import Section from '@/components/section';
import Heading from '@/components/heading';
import Tag from '@/components/tag';
import TagContainer from '@/app/projects/[id]/components/tag-container';

export const dynamicParams = false; //Any item not prefetched above is incorrect

export default async function Page({ params }: { params: { id: string } }) {
  let data: Project;

  try {
    data = await getProjectByName(params.id);
  } catch (err) {
    return <div>How to handle an error 101</div>;
  }

  return (
    <div>
      <div className="mt-14 flex flex-col gap-8">
        <Section delay={0.1}>
          <p className="mb-5 whitespace-pre-line px-12 text-base font-light">
            {data.description}
          </p>
          <TagContainer data={data} />
          {/* <div className="flex flex-col mt-4 gap-y-2 ">
            <Tag title="Year">
              <p className="">{data.year}</p>
            </Tag>
            <Tag title="Website">{data.website ?? 'N/A'}</Tag>
            <Tag title="Platform">{data.platform}</Tag>
            <Tag title="Stack">{data.stack}</Tag>
          </div> */}
        </Section>

        <Section delay={0.2}>
          <div className="flex flex-col items-center gap-y-5">
            {data.images.map((src) => (
              <Image
                key={src}
                src={src}
                className="rounded-md"
                alt="..."
                width={1500}
                height={150}
              />
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const projects = await getProjectNames();

  return projects.map((name) => ({
    id: name.toLowerCase(),
  }));
}
