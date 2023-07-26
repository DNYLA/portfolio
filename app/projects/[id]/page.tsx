import { getProjectByName, getProjectNames } from '@/app/actions';
import Image from 'next/image';
import React from 'react';
import { Project } from '@/lib/types';
import Section from '@/components/section';
import Heading from '@/components/heading';

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
      <div className="flex flex-col mt-14 gap-8">
        <Section delay={0.1}>
          <Heading>Introduction</Heading>
          <p className="text-base font-light indent-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non vel
            perspiciatis dolorum nam odit possimus quaerat ea quidem earum atque
            fuga consectetur officiis neque, doloribus rem nemo assumenda
            facilis voluptates InkDrop.
          </p>
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
