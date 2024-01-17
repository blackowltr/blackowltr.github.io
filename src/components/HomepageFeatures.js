import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      Specialized snapshot services ensure smooth blockchain operations by offering seamless access to historical network data, acting as a safety net for uninterrupted functionality.
      </>
    ),
  },
  {
    title: '',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Utilizing our in-depth knowledge of protocols and governance, we provide an unparalleled and secure service that surpasses mere excellence.
      </>
    ),
  },
  {
    title: '',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Explore our comprehensive educational resources tailored to enlighten both beginners and experienced enthusiasts on PoS networks' intricacies, spanning staking, governance, and more.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
