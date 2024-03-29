import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
                <link rel="icon" href="favicon.png" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
