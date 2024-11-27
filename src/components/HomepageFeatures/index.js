import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Intuitive and Easy to Use',
    Svg: require('@site/static/img/undraw_infinityos_light_bulb.svg').default,
    description: (
      <>
        InfinityOS is designed to be intuitive and user-friendly,
        ensuring you can get up and running swiftly.
      </>
    ),
  },
  {
    title: 'Focuses on Efficiency',
    Svg: require('@site/static/img/undraw_infinityos_graphics_card.svg').default,
    description: (
      <>
        InfinityOS was designed from the ground up to be easily installed
        and used to get your system up and running quickly.
      </>
    ),
  },
  {
    title: 'Built with Modern Technologies',
    Svg: require('@site/static/img/undraw_infinityos_processor.svg').default,
    description: (
      <>
        InfinityOS leverages modern technologies, allowing you to
        extend and customize your system effortlessly.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
