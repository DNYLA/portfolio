import Breadcrumb from './components/breadcrumb';
import PageHeader from '@/components/page-header';

export default function ProjectLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div>
        <PageHeader>
          {/* Breadcrumb from https://preline.co/docs/breadcrumb.html# */}
          <Breadcrumb />
        </PageHeader>
      </div>

      {children}
    </section>
  );
}
