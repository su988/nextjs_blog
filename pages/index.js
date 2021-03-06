import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Hero from '../components/hero';
import DownArrow from '../components/downArrow';
import ProjectGallery from '../components/projectGallery';
import SkillsGallery from '../components/skillsGallery';
import ContactForm from '../components/contactForm';
import Footer from '../components/footer';

import { useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme();
  }, []);

  return (
    <>
      <Head>
        <meta
          name='Description'
          content='Front end developer in Toronto, Canada'
        ></meta>
        <meta
          name='google-site-verification'
          content='xJ_ak0Bu5rUoZnHFg7HVc4qcBP58qN9IGgE-jwDF3ZE'
        />
      </Head>
      <div
        className={
          theme === 'dark'
            ? `${styles.container_dark}`
            : `${styles.container_light}`
        }
      >
        <Hero />
        <DownArrow />
        <ProjectGallery />
        <SkillsGallery />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
