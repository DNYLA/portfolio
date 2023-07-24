'use client';
import Card from '@/components/card';
import ExperienceItem from '@/components/experience-item';
import Heading from '@/components/heading';
import PageHeader from '@/components/page-header';
import Section from '@/components/section';
import NextLink from 'next/link';

export default function Home() {
  return (
    <main className="">
      <PageHeader title="Fullstack Developer" />

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
          <Heading>Projects</Heading>
          <div className="grid grid-cols-3 content-between py-3 p-10 ">
            <Card
              title="Labmaker"
              image="https://insidescientific.com/wp-content/uploads/2021/05/LabMaker.jpg"
              href="/projects?id=labmaker"
            />
            <Card
              title="Couragames"
              image="https://insidescientific.com/wp-content/uploads/2021/05/LabMaker.jpg"
              href="/projects?id=labmaker"
            />
            <Card
              title="Saran"
              image="https://insidescientific.com/wp-content/uploads/2021/05/LabMaker.jpg"
              href="/projects?id=labmaker"
            />
          </div>
          <div className="flex items-center justify-center mt-2">
            <NextLink href={'/projects'}>
              <button className="text-sm cursor-pointer rounded hover:rounded-md bg-emerald-500 p-2 hover:bg-emerald-400 text-black">
                View All
              </button>
            </NextLink>
          </div>
        </Section>

        <Section delay={0.2}>
          <Heading>Experience</Heading>
          <div className="flex flex-col gap-2">
            <ExperienceItem year={'2002'}>
              Born in United Kingdom
            </ExperienceItem>

            <ExperienceItem year={'2021'}>
              Founded and worked at Labmaker
            </ExperienceItem>

            <ExperienceItem year={'2023'}>
              Graduated Masters program at Liverpool University for Computer
              Science with Software Development (2:1).
            </ExperienceItem>
          </div>
        </Section>
      </div>
    </main>
  );
}
