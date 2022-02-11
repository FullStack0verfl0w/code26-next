import React, { FC, useEffect, useRef, useState } from 'react';
import Portal from './portal';
import { connectElements } from './utils';

export type Connection = { from: string, to: string, color?: string };

export type ConnectElementsProps = {
    elements: Connection[],
    overlay?: number,
    selector: string,
    strokeWidth?: number,
    color?: string,
};

const ConnectElements: FC<ConnectElementsProps> = (props: ConnectElementsProps) => {
    const { elements, overlay, selector, strokeWidth, color } = props;

    const [querySelector, setQuerySelector] = useState(selector);
    const svgContainer = useRef();
    const svg = useRef();

    useEffect(() => {
        checkSelector();
    }, []);

    useEffect(() => {
        if ( svgContainer && svg && querySelector) {
            connectAll();
        }
    }, [querySelector]);

    const checkSelector = () => {
        if ( process.browser ) {
            if (document.querySelector(selector)) {
                setQuerySelector(selector);
            }
        }
    };

    const connectAll = () => {
        if ( process.browser ) {
            elements.map((element, index) => {
                const start = document.querySelector(element.from);
                const end = document.querySelector(element.to);
                const path = document.querySelector(`#path${index + 1}`);
                console.log("HEHE", svgContainer, svg, path, start, end);
                return connectElements(svgContainer, svg, path, start, end);
            });
        }
    };

    return (
        querySelector && (
            <Portal query={querySelector}>
                <div
                    id="react-connect-elements-container"
                    style={{ zIndex: overlay, position: 'absolute' }}
                    ref={svgContainer}
                >
                    <svg
                        width="0"
                        height="0"
                        ref={svg}
                    >
                        {elements.map((element, index) => (
                            <path
                                key={`${element.from}-${element.to}`}
                                id={`path${index + 1}`}
                                d="M0 0"
                                stroke={element.color || color}
                                fill="none"
                                strokeWidth={`${strokeWidth}px`}
                            />
                        ))}
                    </svg>
                </div>
            </Portal>
        ) || <></>
    );
};

ConnectElements.defaultProps = {
    overlay: 0,
    strokeWidth: 5,
    color: '#666',
};

export default ConnectElements;