import {FC, useEffect, useState} from "react";
import Title from "../Title";
import styles from "./Stack.module.css";
import StackCard from "../StackCard";
import ConnectElements from "../ConnectElements";
import Script from "next/script";

export type StackProps = {};

const STACK = [
    {
        title: "Web Development", id: "STACK_CARD_WEB",color: "#585dec", stack: [
            { title: "React" },
            { title: "Vue" },
            { title: "Express" },
        ]
    },
    {
        title: "Mobile Development", id: "STACK_CARD_MOBILE", color: "#c39885", stack: [
            { title: "Kotlin" },
            { title: "Jetpack Compose" },
        ]
    },
    {
        title: "Web Scraping", id: "STACK_CARD_SCRAPING", color: "#ac1b1a", stack: [
            { title: "Puppeteer" },
        ]
    },
];

const Stack: FC<StackProps> = (props: StackProps) => {
    return (
        <section className={styles.stack}>
            <Title>Our Stack</Title>
            <div id="STACK_CARD_CONTAINER">
            <StackCard title="Code26" id="STACK_CARD_MAIN" color="#7ea9ac" stack={STACK} />
            {
                STACK.map((val) => {
                    return <StackCard title={val.title} id={val.id} color={val.color} key={val.id} stack={val.stack} />
                })
            }
            <svg id="STACK_CARD_SVG">
                {
                    STACK.map((val) => {
                        return <path id={`PATH_${val.id}`} d="M0 0" strokeWidth="2px" style={{
                            stroke: "#f00",
                            fill: "none",
                        }} key={`PATH_${val.id}`} />
                    })
                }
            </svg>
            </div>
            <Script src="/utils.js" strategy="afterInteractive" onLoad={() => {
                STACK.forEach((val) => {
                    //@ts-ignore
                    console.log(document.getElementById("STACK_CARD_SVG"), document.getElementById(`PATH_${val.id}`), document.getElementById(val.id), document.getElementById("STACK_CARD_MAIN"))
                    connectElements(document.getElementById("STACK_CARD_SVG"), document.getElementById(`PATH_${val.id}`), document.getElementById(val.id), document.getElementById("STACK_CARD_MAIN"))
                })
            }} />

        </section>
    );
};

export default Stack;