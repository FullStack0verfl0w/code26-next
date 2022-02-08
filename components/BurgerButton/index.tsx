import { FC, MouseEventHandler } from "react";
import styles from "./BurgerButton.module.css";
import classNames from "classnames";

export type BurgerButtonProps = {
    onClick: MouseEventHandler,
    state: boolean,
};

const BurgerButton: FC<BurgerButtonProps> = (props: BurgerButtonProps) => {
    const { onClick, state } = props;

    return (
        <button className={styles.burgerButton} onClick={onClick}>
        <div className={classNames([styles.burgerButtonContainer, { [styles.burgerButtonContainerOpened]: state }])}>
            <span className={styles.burgerButtonContainerElements} />
            <span className={styles.burgerButtonContainerElements} />
            <span className={styles.burgerButtonContainerElements} />
        </div>
        </button>
    );
};

export default BurgerButton;