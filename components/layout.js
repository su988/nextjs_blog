import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from 'next-themes';

export function Layout({ children }) {
  return (
    <div className='w-full min-h-screen dark:bg-gray-900'>
      <div className='max-w-screen-sm px-4 py-12 mx-auto antialiased font-body'>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const { pathname } = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleDarkMode = (checked) => {
    const isDarkMode = checked;

    if (isDarkMode) setTheme('dark');
    else setTheme('light');
  };

  const isRoot = pathname === '/post';
  const isDarkMode = resolvedTheme === 'dark';

  return (
    <header
      className={clsx('flex items-center justify-between ', {
        'mb-8': isRoot,
        'mb-2': !isRoot
      })}
    >
      <div className={'max-w-md'}>
        {isRoot ? <LargeTitle /> : <SmallTitle />}
      </div>
      {mounted && (
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          className={isRoot ? 28 : 24}
        />
      )}
    </header>
  );
};

const LargeTitle = () => (
  <h1>
    <Link href='/post'>
      <a
        className={clsx(
          'text-3xl font-black leading-none text-black no-underline font-display',
          'sm:text-8xl',
          'dark:text-white'
        )}
      >
        Blog
      </a>
    </Link>
  </h1>
);

const SmallTitle = () => (
  <h1>
    <Link href='/post'>
      <a
        className={clsx(
          'text-2xl font-black text-black no-underline font-display',
          'dark:text-white'
        )}
      >
        Blog
      </a>
    </Link>
  </h1>
);
