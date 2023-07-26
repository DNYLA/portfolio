import Heading from '@/components/heading';
import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header';
import Section from '@/components/section';
import Head from 'next/head';
import { M_PLUS_1_Code } from 'next/font/google';
import Link from 'next/link';
import Button from '@/components/button';
import { AiFillHome } from 'react-icons/ai';
const mPlus1C = M_PLUS_1_Code({ subsets: ['latin'] });

export default function NotFound() {
  return (
    <html lang="en">
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <title>Danyaal Ahmed - 404</title>
      </Head>

      <body className={`${mPlus1C.className}`}>
        <Navbar />
        {/* TODO: Find a better way than having to set padding to 300PX? */}
        <div className="container mx-auto p-5 2xl:px-[400px]">
          <main className="flex h-screen">
            <div className="flex flex-col gap-2 w-full align-middle text-center items-center m-auto">
              <h1 className="text-4xl">Not Found</h1>
              <h1 className="text-xl text-left">
                The Page you are looking for doesn&#39;t exist
              </h1>
              <Link href={'/'}>
                <Button className="text-white flex items-center gap-x-1">
                  <AiFillHome />
                  Home
                </Button>
              </Link>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
