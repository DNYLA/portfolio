import { getProjects } from '@/app/actions';
import PageHeader from '@/components/page-header';

export const dynamicParams = false; //Any item not prefetched above is incorrect

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <PageHeader title={params.id} />
    </div>
  );
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    id: project.name,
  }));
}
