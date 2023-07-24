'use client';
import Heading from '@/components/heading';
import PageHeader from '@/components/page-header';
import Section from '@/components/section';

export default function Home() {
  return (
    <main className="">
      <PageHeader title="Fullstack Developer" />

      <Section>
        <Heading className="mt-20">Introduction</Heading>
      </Section>
    </main>
  );
}
