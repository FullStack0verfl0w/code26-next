import { FC } from "react";
import styles from "./Title.module.css";

export type TitleProps = {
    children?: string,
};

const Title: FC<TitleProps> = (props: TitleProps) => {
    const { children: text } = props;

    return (
        <h1 className={styles.title}>{text}</h1>
    );
};

export default Title;