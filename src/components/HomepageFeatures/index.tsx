import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'اطلاعات درس',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        این صفحه شامل قوانین گزارش‌نویسی، نحوه نمره‌دهی آزمایش‌ها، منابع آموزشی برای Git و SOLID و اطلاعات تماس با دستیاران آموزشی است.
      </>
    ),
  },
  {
    title: 'کد آزمایش های مختلف',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        دسترسی ساده به ریپوی گیت‌هاب آزمایش‌های مختلف به شکل ساده
      </>
    ),
  },
  {
    title: 'محتوای درس',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        ویدیوها و فایل‌های آموزشی برای هر یک از فصل‌های آموزشی آزمایشگاه مهندسی نرم‌افزار
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): ReactNode {
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
