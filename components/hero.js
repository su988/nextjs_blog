import styles from '../styles/Landing.module.css';
import styles2 from '../styles/Logo.module.css';
import { useTheme } from 'next-themes';

export default function Hero() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`px-5 pt-20 md:pt-40 md:ml-20 md:w-4/5 lg:w-3/6 lg:ml-32 `}>
      <h1 className={`text-4xl pb-8 dark:text-gray-100 ${styles.name}`}>
        Hi, I'm
        <span
          className={`${styles2.logo} ${styles.dot_parent} pl-3 text-6xl md:text-8xl text-gray-800 dark:text-gray-100 `}
        >
          Suyash
          <span className={`${styles.dot} bg-gray-800 dark:bg-pink-900`}></span>
        </span>
      </h1>

      <div className={styles.box}>
        <div className={styles.role}>
          <div className={styles.block}></div>
          <p className={`${styles.role_name} dark:text-gray-100 `}>
            Front End Developer
          </p>
        </div>
      </div>

      <p
        className={`pt-5 pb-10 leading-loose tracking-wide text-lg text-gray-500 dark:text-gray-400 ${styles.summary}`}
      >
        I’m a multidisciplinary designer and developer specializing in front end
        web development. I have experience working with multiple programming
        languages and frameworks used in building static and dynamic websites
        for the web.
      </p>
      <button
        className={`text-gray-200 p-4 rounded-2xl pointer-cursor shadow md:tracking-wide md:leading-loose ${
          styles.summary
        } ${
          theme === 'light' ? styles.contact_btn_light : styles.contact_btn_dark
        }`}
      >
        <a href='mailto:suyashvks@gmail.com'>Get in Touch</a>
      </button>
    </div>
  );
}
