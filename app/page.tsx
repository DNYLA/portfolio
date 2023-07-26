import Card from '@/components/card';
import ExperienceItem from '@/components/experience-item';
import Heading from '@/components/heading';
import IconButton from '@/components/icon-button';
import PageHeader from '@/components/page-header';
import Section from '@/components/section';
import Link from 'next/link';
import NextLink from 'next/link';
import { AiFillAlipayCircle, AiOutlineGithub } from 'react-icons/ai';

export default function Home() {
  return (
    <main className="">
      <PageHeader>Fullstack Developer</PageHeader>

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-3 p-10">
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
            <Link href={'/projects'}>
              <button className="text-sm cursor-pointer rounded hover:rounded-md bg-emerald-500 p-2 hover:bg-emerald-400 text-black">
                View All
              </button>
            </Link>
          </div>
        </Section>

        <Section delay={0.3}>
          <Heading>Experience</Heading>
          <div className="flex flex-col gap-2">
            <ExperienceItem year={'2002'}>
              Born in United Kingdom
            </ExperienceItem>

            <ExperienceItem year={'2021'}>
              Founded and worked at Labmaker
            </ExperienceItem>

            <ExperienceItem year={'2023'}>
              Graduated Bachelor&#39;s program at Liverpool University for
              Computer Science with Software Development (Upper-Second class).
            </ExperienceItem>
          </div>
        </Section>

        <Section delay={0.4}>
          <Heading>Links</Heading>
          <div className="flex flex-col gap-2">
            <Link href={'https://github.com/DNYLA'} target="_blank">
              <IconButton icon={<AiOutlineGithub size={20} />}>
                Github
              </IconButton>
            </Link>
          </div>
        </Section>
      </div>
    </main>
  );
}
