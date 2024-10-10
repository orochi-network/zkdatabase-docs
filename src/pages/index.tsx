import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <div className='w-full h-fit bg-[#112633] p-10'>
      <div className='text-4xl text-neutral-50'>zkDatabase Documentation</div>
      <div className='text-lg text-neutral-50 w-[70%] pt-4'>
        Welcome to the official zkDatabase Documentation. Whether you're a developer, database administrator, or just starting your journey with zkDatabase, our documentation provides you with the information and knowledge needed to build applications on MongoDB and the Atlas developer data platform.
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title='Homepage'
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className='lg:px-20 sm:px-10'>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
