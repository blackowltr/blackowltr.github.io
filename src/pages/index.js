import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function Heading({ level, children }) {
  const Tag = `h${level}`;
  return <Tag>{children}</Tag>;
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container text--center" style={{ justifyContent: 'space-between' }}>
        <div className='text--center'>
          <img
            className={styles.featureImage}
            src='img/blackowl.svg'
            alt='services-blackowl'
            style={{ width: '30%', height: 'auto' }}
          />
        </div>
        <Heading level={1} className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
          className="button button--secondary button--lg"
          to="/docs/category/testnet">
          Services
        </Link>
        <span style={{ padding: '0 6px' }}></span>
        <Link
          className="button button--secondary button--lg"
          to="https://explorer.blackowl.tech">
          Explorer
        </Link>
      </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Services`}
      description="Difficult problems require novel solutions.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
