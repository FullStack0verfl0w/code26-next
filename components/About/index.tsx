import { FC } from "react";
import Art from "../../public/art.svg";
import styles from "./About.module.css"

export type AboutProps = {};

const About: FC<AboutProps> = (props: AboutProps) => {
    return (
        <section className={styles.about} id="about">
            <div className={styles.aboutDescription}>
                <h1 className={styles.aboutDescriptionTitle}>We do real projects</h1>
                <p className={styles.aboutDescriptionDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                    gravida.</p>
            </div>
            <div className={styles.aboutPicture}>
                <Art/>
            </div>
        </section>
    );
};

export default About;