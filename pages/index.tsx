import type { NextPage } from 'next'
import Header from "../components/Header";
import Footer, { FooterProps } from "../components/Footer";
import About from "../components/About";
import Stack from "../components/Stack";
import Projects from "../components/Projects";
import { GetStaticProps } from "next";

const Home: NextPage<FooterProps> = (props: FooterProps) => {
    const { year, email } = props;

    return (
        <div className="mainContainer">
            <Header />
            <main>
                <About />
                <Stack />
                <Projects />
            </main>
            <Footer year={year} email={email}/>
        </div>
    );
};

export const getStaticProps: GetStaticProps = (context) => {
    return {
        props: {
            year: (new Date()).getFullYear(),
            email: btoa("support@edoprovod.ru"),
        },
    };
};
export default Home;