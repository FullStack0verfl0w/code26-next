import { FC } from "react";
import styles from "./HeaderNavigation.module.css";
import classNames from "classnames";

export type HeaderNavigationProps = {
    state: boolean,
};

const HeaderNavigation: FC<HeaderNavigationProps> = (props: HeaderNavigationProps) => {
    const { state } = props;

    return (
        <nav className={styles.navigation}>
            <ul className={classNames([styles.navigationList, { [styles.navigationListOpened]: state }])}>
                <li className={styles.navigationListItem}>
                    <a className={styles.navigationListItemLink} href="#about">About</a>
                </li>
                <li className={styles.navigationListItem}>
                    <a className={styles.navigationListItemLink} href="#projects">Projects</a>
                </li>
                <li className={styles.navigationListItem}>
                    <a className={styles.navigationListItemLink} href="#contacts">Contacts</a>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNavigation;