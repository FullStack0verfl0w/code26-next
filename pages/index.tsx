import type { GetServerSideProps, NextPage } from 'next'
import Header from "../components/Header";
import Footer, { FooterProps } from "../components/Footer";
import About from "../components/About";
import Stack from "../components/Stack";
import Projects from "../components/Projects";
import Head from "next/head";

interface HomeProps extends FooterProps {
    host: string | undefined,
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
    const { year, email, host } = props;

    return (
        <>
            <Head>
                <title>Code26</title>

                <meta name="keywords" content="Full Stack Development, Mobile Development, React Development, Vue Development, Android Development, iOS Development"/>
                <meta name="description" content="Full stack and mobile development using the latest technologies" />

                <meta name="og:title" content="Code26" />
                <meta name="og:description" content="Full stack and mobile development using the latest technologies" />
                <meta name="og:type" content="website" />
                <meta name="og:image" content={`${host}/logo.png`} />

                <meta name="twitter:title" content="Code26" />
                <meta name="twitter:description" content="Full stack and mobile development using the latest technologies" />
                <meta name="twitter:card" content="photo" />
                <meta name="twitter:image" content={`${host}/logo.png`} />

                <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />

                <link rel="icon" href="favicon.png" />
            </Head>

            <div className="mainContainer">
                <Header />
                <main style={{display: "flex",flexDirection: "column", alignItems: "center"}}>
                    <About />
                    <Stack />
                    <Projects />
                </main>
                <Footer year={year} email={email}/>
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
    const { req } = context;

    return {
        props: {
            year: (new Date()).getFullYear(),
            email: btoa("support@edoprovod.ru"),
            host: req.headers.host,
        },
    };
};
export default Home;