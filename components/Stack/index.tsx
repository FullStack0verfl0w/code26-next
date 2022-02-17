import {FC, useEffect, useState} from "react";
import Title from "../Title";
import StackCard from "../StackCard";
import Script from "next/script";
import styles from "./Stack.module.css";

export type StackProps = {};

const STACK = [
    {
        title: "Web Development",
        id: "STACK_CARD_WEB",
        color: "#585dec",
        start: { x: 0, y: 90 },
        stack: [
            { title: "React" },
            { title: "Vue" },
            { title: "Express" },
        ]
    },
    {
        title: "Mobile Development",
        id: "STACK_CARD_MOBILE",
        color: "#c39885",
        // start: { x: 265, y: 130 },
        stack: [
            { title: "Kotlin" },
            { title: "Jetpack Compose" },
        ]
    },
    {
        title: "Web Scraping",
        id: "STACK_CARD_SCRAPING",
        color: "#ac1b1a",
        start: null,
        stack: [
            { title: "Puppeteer" },
        ]
    },
];

const Stack: FC<StackProps> = (props: StackProps) => {


    return (
        <section className={styles.stack}>
            <Title>Our Stack</Title>
            <div className={styles.stackCardContainer}>
                <StackCard title="Code26" id="STACK_CARD_MAIN" color="#7ea9ac" stack={STACK} />
                {
                    STACK.map((val) => {
                        return <StackCard title={val.title} id={val.id} color={val.color} key={val.id} stack={val.stack} />
                    })
                }
            </div>
            <Script src="leader-line.min.js" strategy="afterInteractive" onLoad={() => {
                //@ts-ignore
                let lines = [];

                const drawLines = () => {
                    lines = STACK.map((val) => {
                        const start = document.querySelector("#STACK_CARD_MAIN");
                        const end = document.querySelector(`#${val.id}`);
                        //@ts-ignore
                        return new LeaderLine(
                            //@ts-ignore
                            val.start ? LeaderLine.pointAnchor(start, val.start) : start,
                            //@ts-ignore
                            end,
                            {
                                path: "fluid",
                                startPlugColor: "#7ea9ac",
                                endPlugColor: val.color,
                                gradient: true,
                                startPlug: "disc",
                                endPlug: "disc",
                            }
                        );
                    });
                };
                if ( window.innerWidth >= 900 ) {
                    drawLines();
                }

                window.addEventListener('resize', function(e){
                    if ( window.innerWidth <= 900 ) {
                        //@ts-ignore
                        lines.forEach((val, i) => {
                            val.remove();
                            //@ts-ignore
                            lines.splice(i, 1);
                        })
                    }
                    else {
                        if ( lines.length == 0 ) {
                            drawLines();
                        }
                    }
                });
            }} />
        </section>
    );
};

export default Stack;