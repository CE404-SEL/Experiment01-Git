import {themes as prismThemes} from "prism-react-renderer";

const config = {
    title: "آزمایشگاه مهندسی نرم‌افزار",
    tagline: "دانشگاه صنعتی شریف - دانشکده مهندسی کامپیوتر",
    favicon: "img/favicon.ico",

    url: "https://CE404-SEL.github.io",
    baseUrl: "/",
    trailingSlash: false,

    organizationName: "CE404-SEL",
    projectName: "CE404-SEL.github.io",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "fa",
        locales: ["fa"],
        localeConfigs: {
            fa: {
                label: "فارسی",
                direction: "rtl",
            },
        },
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.js",
                    editUrl: "https://github.com/CE404-SEL/Experiment01-Git/blob/main/",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            },
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: "img/ap-social-card.jpg",
            navbar: {
                title: "آزمایشگاه مهندسی نرم‌افزار",
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "courseSidebar",
                        label: "محتوای درس",
                        position: "left",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialsSidebar",
                        label: "کوییزها",
                        position: "left",
                    },
                ],
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
                additionalLanguages: ["makefile", "bash", "cmake"],
            },
        }),
};

export default config;