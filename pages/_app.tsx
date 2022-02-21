import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import { NextPageContext } from "next";

function MyApp(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <Component {...pageProps} />
    );
}

export default MyApp;
