import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

const featureList = [
    {
        title: "اطلاعات درس",
        imageSrc: "/img/feat1.svg",
        description: "این صفحه شامل قوانین گزارش‌نویسی، نحوه نمره‌دهی آزمایش‌ها، اطلاعات تماس با دستیاران آموزشی است.",
        link: "/docs/course/course-info",
    },
    {
        title: "کد آزمایش‌های مختلف",
        imageSrc: "/img/feat2.svg",
        description: "دسترسی ساده به ریپوی گیت‌هاب آزمایش‌های مختلف به شکل ساده",
        link: "/docs/materials/1",
    },
    {
        title: "محتوای درس",
        imageSrc: "/img/feat3.svg",
        description:
            "ویدیوها و فایل‌های آموزشی برای هر یک از آزمایش‌های آزمایشگاه مهندسی نرم‌افزار",
        link: "/docs/quizes/1",
    },
];

function Feature({title, imageSrc, description, link}) {
    return (
        <div className="col col--4 text--center">
            <div className={`padding-horiz--md ${styles.featureBox}`}>
                <Link to={link} className={styles.featureLink}>
                    <img className={styles.featureSvg} src={imageSrc} alt="Duck"/>
                    <Heading as="h3">{title}</Heading>
                </Link>
                <p>{description}</p>
            </div>
        </div>
    );
}


export default function HomepageFeatures() {
    return (
        <section className="padding-vert--lg" style={{scale:1,}}>
            <div className="container">
                <div className="row">
                    {featureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
