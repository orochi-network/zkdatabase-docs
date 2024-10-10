import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
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

  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-2 lg:justify-start sm:justify-center lg:items-start sm:items-center'>
      {navigate.map((nav, index) => (
        <ul key={'navigate-' + index} className='space-y-2 lg:space-y-4 hover:no-underline'>
          <div className={`font-medium text-sm uppercase ${isDarkMode ? 'text-neutral-50' : 'text-neutral-500'}`}>{nav.title}</div>
          {nav.links.map((link, indexLink) => (
            <div key={'links-' + indexLink}>
              <Link
                aria-label={link.label}
                href={link.href}
                target='_blank'
                className={`hover:no-underline block text-start break-words font-semibold ${isDarkMode ? 'text-neutral-500' : 'text-black'}`}
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

export function SocialLink({ isDarkMode }) {

  const socials = [
    {
      href: 'https://twitter.com/OrochiNetwork',
      icon: <Twitter color={isDarkMode ? '#ffffff' : ''} />,
    },
    {
      href: 'https://discord.com/invite/sTU4TUh8H3',
      icon: <Discord color={isDarkMode ? '#ffffff' : ''} />,
    },
    {
      href: 'https://github.com/orochi-network',
      icon: <Github color={isDarkMode ? '#ffffff' : ''} />,
    },
    {
      href: 'https://t.me/OrochiNetwork',
      icon: <Telegram color={isDarkMode ? '#ffffff' : ''} />,
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
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <footer className={clsx('w-full grid gap-8 px-6 py-[5rem]', 'lg:gap-14 lg:py-[6rem]', `${isDarkMode ? 'bg-[#252526]' : 'bg-transparent'}`)}>
      <div className={`max-w-[1136px] mx-auto`}>
        <div className='grid lg:grid-cols-[auto,minmax(0,1fr)] lg:gap-[11.375rem]'>
          <div className='flex flex-col lg:justify-between lg:items-start sm:items-center'>
            <div className='flex flex-col gap-12 sm:items-center lg:items-start'>
              <Link href='https://orochi.network/' className='block h-12'>
                <FooterLogo logo={logo} />
              </Link>
              <div className='text-10 text-neutral-400 '>
                The World First Zero-Knowledge Modular Data Availability Layer
              </div>
            </div>
            <SocialLink isDarkMode={isDarkMode} />
          </div>
          <FooterNavigate />
        </div>

        <hr className='m-0 h-[1px] w-full border-none bg-neutral-300' />

        <div className='flex flex-wrap items-center justify-between gap-8 pt-10 sm:justify-center sm:items-center lg:justify-between'>
          <div className='flex flex-row gap-2 h-fit items-center'>
            <Link 
              href="" 
              target='_blank' 
              className={`font-semibold hover:no-underline ${isDarkMode ? 'text-neutral-500' : 'text-black'}`}
            >
              Privacy Policy
            </Link>
            <div className="w-[1px] h-[20px] bg-neutral-400"></div>
            <Link 
              href="" 
              target='_blank' 
              className={`font-semibold hover:no-underline ${isDarkMode ? 'text-neutral-500' : 'text-black'}`}
            >
              Term of Service
            </Link>
          </div>

          <p className='text-sm text-neutral-600 lg:text-base lg:text-neutral-500 pt-5'>
            © {year} Orochi Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
