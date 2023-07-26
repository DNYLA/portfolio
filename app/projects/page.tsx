'use server';
import { getProjects } from '@/app/actions';
import ProjectGrid from '@/app/projects/project-grid';
import PageHeader from '@/components/page-header';

export default async function Projects() {
  const data = await getProjects();

  return (
    <main className="bg-red">
      <PageHeader>Projects</PageHeader>

      <div className="flex flex-col mt-14 gap-8">
        {/* <Section delay={0.2}> */}
        {/* <h1
            className={
              'text-lg font-bold underline decoration-2 decoration-neutral-300 underline-offset-4 tracking-widest mb-2'
            }
          >
            Projects
          </h1> */}

        {/* </Section> */}
        <ProjectGrid projects={data} />
      </div>
    </main>
  );
}
