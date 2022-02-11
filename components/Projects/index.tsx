import { FC } from "react";
import Title from "../Title";
import styles from "./Projects.module.css";
import Article from "../Article";

export type ProjectsProps = {};

const Projects: FC<ProjectsProps> = (props: ProjectsProps) => {
    return (
        <section className={styles.projects} id="projects">
            <div className={styles.projectsContainer}>
            <Title>Our projects</Title>
            <Article title="Edoprovod" url="http://edoprovod.ru" image={{
                webP: "edoprovod-delivery.webp",
                png: "edoprovod-delivery.png",
                alt: "Edoprovod Delivery"
            }}>Delivery app with backend, on map tracking and courier stand-alone app.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
            </Article>
            <Article title="Edoprovod Fitness" url="http://edoprovod.ru" image={{
                webP: "./edoprovod-fitness.webp",
                png: "./edoprovod-fitness.png",
                alt: "Edoprovod Fitness",
            }}>Fitness app with our backend. Monitor your weight, get meal and exercises from trainers based on your body stucture.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
            </Article>
            </div>
        </section>
    );
};

export default Projects;