import React from 'react';

import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import { Telegram } from '@site/static/svg-icons/Telegram';
import FooterLogo from '@theme/Footer/Logo';
import clsx from 'clsx';
import { Discord } from '@site/static/svg-icons/Discord';
import { Twitter } from '@site/static/svg-icons/Twitter';
import { Github } from '@site/static/svg-icons/Github';

function FooterNavigate() {
  const navigate = [
    {
      title: 'Developers',
      links: [
        {
          href: '/',
          label: 'Homepage',
        },
        {
          href: 'https://github.com/orochi-network/zkDatabase',
          label: 'Github',
        },
        {
          href: 'https://eprint.iacr.org/2024/336',
          label: 'Cookbook',
        },
        {
          href: '/',
          label: 'Get started',
        },
      ],
    },
    {
      title: 'Ecosystem',
      links: [
        {
          href: 'https://github.com/orochi-network/zkDatabase',
          label: 'Explore',
        },
        {
          href: 'https://github.com/orochi-network/orochimaru',
          label: 'Collab',
        },
      ],
    },
    {
      title: 'Resource',
      links: [
        {
          href: 'https://twitter.com/OrochiNetwork',
          label: 'Blog',
        },
        {
          href: 'https://www.npmjs.com/package/zkdb',
          label: 'o1js',
        },
        {
          href: 'https://forums.minaprotocol.com/t/draft-mina-data-availability-layer/6150',
          label: 'MIPs',
        },
        {
          href: 'https://eprint.iacr.org/2024/336',
          label: 'RamenPasta',
        },
      ],
    },
  ];

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-2 justify-start'>
      {navigate.map((nav, index) => (
        <ul key={'navigate-' + index} className='space-y-2 lg:space-y-4 hover:no-underline'>
          <div className='font-medium uppercase text-neutral-500'>{nav.title}</div>
          {nav.links.map((link, indexLink) => (
            <div key={'links-' + indexLink}>
              <Link
                aria-label={link.label}
                href={link.href}
                target='_blank'
                className='hover:no-underline block text-start break-words font-semibold text-black'
              >
                {link.label}
              </Link>
            </div>
          ))}
        </ul>
      ))}
    </div>
  );
}

export function SocialLink() {
  const socials = [
    {
      href: 'https://twitter.com/OrochiNetwork',
      icon: <Twitter />,
    },
    {
      href: 'https://discord.com/invite/sTU4TUh8H3',
      icon: <Discord />,
    },
    {
      href: 'https://github.com/orochi-network',
      icon: <Github />,
    },
    {
      href: 'https://t.me/OrochiNetwork',
      icon: <Telegram />,
    },
  ];

  return (
    <div className='grid auto-cols-max grid-flow-col gap-6 sm:py-10'>
      {socials.map((social, index) => (
        <a href={social.href} key={index} className='block h-6 w-6' target='_blank'>
          {social.icon}
        </a>
      ))}
    </div>
  );
}

function Footer(): JSX.Element | null {
  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }
  const {logo} = footer;
  const year = new Date().getFullYear();

  return (
    <footer className={clsx('w-screen mx-auto grid max-w-[1136px] gap-8 bg-transparent px-6 py-[5rem]', 'lg:gap-14 lg:py-[6rem]')}>
      <div className='grid lg:grid-cols-[auto,minmax(0,1fr)] lg:gap-[11.375rem]'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col gap-12'>
            <Link href='/' className='block h-12'>
              <FooterLogo logo={logo} />
            </Link>
            <div className='text-10 text-neutral-400'>
              The World First Zero-Knowledge Modular Data Availability Layer
            </div>
          </div>
          <SocialLink />
        </div>
        <FooterNavigate />
      </div>

      <hr className='m-0 h-[1px] w-full border-none bg-neutral-300' />

      <div className='flex flex-wrap items-center justify-between gap-8'>
        <div className='flex flex-row gap-2 h-fit items-center'>
          <div className='font-semibold'>Privacy Policy</div>
          <div className="w-[1px] h-[20px] bg-neutral-300"></div>
          <div className='font-semibold'>Term of Service</div>
        </div>

        <p className='text-sm text-neutral-600 lg:text-base lg:text-neutral-500'>
          © {year} Orochi Network. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
