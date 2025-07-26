import styles from "./styles.module.css";

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.wave}>
                <div className={styles.text}>
                    &copy;
                    {" آزمایشگاه مهندسی نرم‌افزار"}
                    <br className={styles.footerBreak} />
                    <span className={styles.dash}>{" - "}</span>
                    {" دانشکده مهندسی کامپیوتر دانشگاه صنعتی شریف - "}
                    {"تابستان ۱۴۰۴"}
                </div>
            </div>
        </footer>
    );
}
