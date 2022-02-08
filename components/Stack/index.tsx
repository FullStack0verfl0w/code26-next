import { FC } from "react";
import Title from "../Title";
import styles from "./Stack.module.css";

export type StackProps = {};

const Stack: FC<StackProps> = (props: StackProps) => {
    return (
        <section className={styles.stack}>
            <Title>Our Stack</Title>
        </section>
    );
};

export default Stack;