import { FC } from "react";
import Link from "next/link";
import Sad from "../../public/sad-face.svg";
import styles from "./404.module.css";
import Head from "next/head";

export type NotFoundProps = { };

const NotFound: FC<NotFoundProps> = (props: NotFoundProps) => {
    return (
        <>
            <Head>
                <title>404 Not Found</title>
            </Head>
            <main className={styles.mainContainer}>
                <div className={styles.sadFace}>
                    <Sad />
                </div>
                <div className={styles.errorContainer}>
                    <span className={styles.errorTextBold}>404</span>
                    <span className={styles.errorText}>Sorry, but this page doesn&apos;t exist.</span>
                    <Link href="/" passHref>
                        <a className={styles.backButton}>Back to Home</a>
                    </Link>
                </div>
            </main>
        </>
    );
};

export default NotFound;