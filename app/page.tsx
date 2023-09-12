import { getProjects } from '@/app/actions';
import Button from '@/components/button';
import Card from '@/components/card';
import ExperienceItem from '@/components/experience-item';
import Heading from '@/components/heading';
import IconButton from '@/components/icon-button';
import PageHeader from '@/components/page-header';
import Section from '@/components/section';
import Link from 'next/link';
import { AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';

export default async function Home() {
  const data = (await getProjects())
    .filter((item) => item.showcase !== false)
    .slice(0, 3);

  return (
    <main className="">
      <PageHeader>Fullstack Developer</PageHeader>

      <div className="mt-14 flex flex-col gap-8">
        <Section delay={0.1}>
          <Heading>Introduction</Heading>
          <p className="indent-8 text-base font-light">
            I spend all my time making open source full stack applicatons that
            get used by only me.
          </p>
        </Section>

        <Section delay={0.2}>
          <Heading>Projects</Heading>
          <div className="grid grid-cols-1 p-10 py-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.map(({ name, cover }) => (
              <Card
                key={name}
                title={name}
                src={cover}
                href={`/projects/${name.toLowerCase()}`}
              />
            ))}
          </div>
          <div className="mt-2 flex items-center justify-center">
            <Link href={'/projects'}>
              <Button>View All</Button>
            </Link>
          </div>
        </Section>

        <Section delay={0.3}>
          <Heading>Experience</Heading>
          <div className="flex flex-col gap-2">
            <ExperienceItem year={'2002'}>
              Born in United Kingdom
            </ExperienceItem>

            <ExperienceItem year={'2019'}>
              Employed at Morrisons as a Customer Assistant{' '}
              <span className="font-normal">(OCT 2019 - AUG 2020)</span>
            </ExperienceItem>

            <ExperienceItem year={'2021'}>
              Founded and worked at Labmaker{' '}
              <span className="font-normal">(FEB 2021 - APR 2022)</span>
            </ExperienceItem>

            {/* <ExperienceItem year={'2023'}>
              Graduated Bachelor&#39;s program at University of Liverpool for
              Computer Science with Software Development (Upper-Second class).
            </ExperienceItem> */}
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
            <Link href={'mailto: danyaal.ahmed2@gmail.com'} target="_blank">
              <IconButton icon={<AiOutlineMail size={20} />}>
                danyaal.ahmed2@gmail.com
              </IconButton>
            </Link>
          </div>
        </Section>
      </div>
    </main>
  );
}
