'use server';
import { getProjects } from '@/app/actions';
import ProjectGrid from '@/app/projects/components/project-grid';
import Button from '@/components/button';
import PageHeader from '@/components/page-header';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { BsHammer } from 'react-icons/bs';

export default async function Projects() {
  const data = await getProjects();

  return (
    <main className="bg-red">
      {/* <PageHeader>Log</PageHeader> */}

      <div className="flex flex-col mt-14 gap-8">
        <div className="flex flex-col gap-2 w-full align-middle text-center items-center m-auto">
          <div className="flex items-center gap-x-3">
            <span className="animate-tilt">
              <BsHammer size={30} />
            </span>
            <h1 className="text-4xl">Under Construction</h1>
          </div>
          <h1 className="text-xl text-left">
            The builders are currently on strike and haven&#39;t finished this
            yet!
          </h1>
          <Link href={'/'}>
            <Button className="text-white flex items-center gap-x-1">
              <AiFillHome />
              Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
