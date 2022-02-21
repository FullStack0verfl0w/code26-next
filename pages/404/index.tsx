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
                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <a href="/" className={styles.backButton}>Back to Home</a>
                </div>
            </main>
        </>
    );
};

export default NotFound;