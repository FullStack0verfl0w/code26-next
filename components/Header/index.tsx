import { FC, MouseEventHandler, useState } from "react";
import BurgerButton from "../BurgerButton";
import Logo from "../Logo/Logo";
import HeaderNavigation from "../HeaderNavigation";
import styles from "./Header.module.css";

export type HeaderProps = {};

const Header: FC<HeaderProps> = (props: HeaderProps) => {
    const [burgerState, setBurgerState] = useState(false);

    const onBurgerClick: MouseEventHandler = (e) => {
        setBurgerState((p) => !p);
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.headerTop}>
                    <Logo color="#2b2828"/>
                    <BurgerButton onClick={onBurgerClick} state={burgerState}/>
                </div>
                <HeaderNavigation state={burgerState} />
            </div>
        </header>
    );
};

export default Header;