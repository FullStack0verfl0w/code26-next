import { FC } from "react";
import styles from "./LinkButton.module.css";

export type LinkButtonProps = {
    href: string,
    children?: string,
    target?: string,
};

const LinkButton: FC<LinkButtonProps> = (props: LinkButtonProps) => {
    const { href, children: label, target } = props;

    return (
        <a className={styles.linkButton} href={href} target={target}>{label}</a>
    );
};

export default LinkButton;