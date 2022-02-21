import { FC, useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

export interface FooterProps {
    year: number,
    email: string,
}

const Footer: FC<FooterProps> = (props: FooterProps) => {
    const { year, email } = props;

    const [decodedEmail, setDecodedEmail] = useState(email);

    useEffect(() => {
        setDecodedEmail(atob(email));
    }, [email])

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerContacts} id="contacts">
                    <h1>Contact Us</h1>
                    <ul className={styles.footerContactsList}>
                        <li>
                            <span>Email: </span>
                            <a href={`mailto:${decodedEmail}`}>{decodedEmail}</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footerLogo}>
                    <Logo color="#fff" enableHover={true} />
                    <div className={styles.footerLogoCopy}>
                        <span>Copyright &copy; {year} Code26.</span>
                        <span>All rights deleted.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;