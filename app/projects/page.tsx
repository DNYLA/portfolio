import Card from '@/components/card';
import Heading from '@/components/heading';
import PageHeader from '@/components/page-header';
import Section from '@/components/section';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  return (
    <main className="bg-red">
      <PageHeader title="Projects" />

      <div className="flex flex-col mt-14 gap-8">
        <Section delay={0.2}>
          {/* <h1
            className={
              'text-lg font-bold underline decoration-2 decoration-neutral-300 underline-offset-4 tracking-widest mb-2'
            }
          >
            Projects
          </h1> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-3 p-10 ">
            <Card
              title="Project 1"
              image="https://insidescientific.com/wp-content/uploads/2021/05/LabMaker.jpg"
              href="/projects?id=labmaker"
            />
            <Card
              title="Project 2"
              image="https://insidescientific.com/wp-content/uploads/2021/05/LabMaker.jpg"
              href="/projects?id=labmaker"
            />
            <Card
              title="Project 1"
              image="https://insidescientific.com/wp-content/uploads/2021/05/LabMaker.jpg"
              href="/projects?id=labmaker"
            />
            <Card
              title="Saran"
              image="https://insidescientific.com/wp-content/uploads/2021/05/LabMaker.jpg"
              href="/projects?id=labmaker"
            />
            <Card
              title="Saran"
              image="https://insidescientific.com/wp-content/uploads/2021/05/LabMaker.jpg"
              href="/projects?id=labmaker"
            />
            <Card
              title="Saran"
              image="https://insidescientific.com/wp-content/uploads/2021/05/LabMaker.jpg"
              href="/projects?id=labmaker"
            />
            <Card
              title="Saran"
              image="https://insidescientific.com/wp-content/uploads/2021/05/LabMaker.jpg"
              href="/projects?id=labmaker"
            />
            <Card
              title="Saran"
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
      </div>
    </main>
  );
}
