import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { ArrowRight } from 'phosphor-icons';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  url: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Homepage',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    url: 'zkdatabase.org',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Cookbook',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    url: 'https://docs.orochi.network/zkdatabase/chapter',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    url: 'https://orochi.network/blog',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Collab',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    url: 'https://magical-caravel-b75.notion.site/Orochi-Network-Onboarding-Document-38c050910d2e4da4b92709bc867e790c',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, Svg, description, url}: FeatureItem) {
  return (
    <a 
      href={url}
      target="_blank"
      className='flex flex-row gap-8 items-center border-[1px] border-neutral-200 border-b-0 border-r-0 rounded-2xl p-5 min-w-fit w-[70%] shadow-lg bg-transparent hover:shadow-[0px_0px_10px_8px_#00000024] hover:no-underline'
    >
      <img src='https://webimages.mongodb.com/_com_assets/icons/atlas_serverless.svg' />
      <div className='flex flex-col gap-4 py-4 items-start no-underline'>
        <div className='text-2xl font-semibold text-black'>
          {title}
        </div>
        <div className='text-black'>
          Run zkDatabase on a multi-cloud developer data platform that accelerates and simplifies working with operational data.
        </div>
      </div>
    </a>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      {/* <div className="container"> */}
        <div className="flex flex-col gap-7 justify-center items-center w-full">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      {/* </div> */}
    </section>
  );
}
