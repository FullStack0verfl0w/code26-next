import { FC } from "react";
import Title from "../Title";
import styles from "./Projects.module.css";

export type ProjectsProps = {};

const Projects: FC<ProjectsProps> = (props: ProjectsProps) => {
    return (
        <section className={styles.projects} id="projects">
            <Title>Our projects</Title>

        </section>
    );
};

export default Projects;