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
  // const posts = await fetch('https://.../posts').then((res) => res.json());
  const posts = [{ id: 'labmaker' }, { id: 'saran' }];

  return posts.map((post) => ({
    id: post.id,
  }));
}
