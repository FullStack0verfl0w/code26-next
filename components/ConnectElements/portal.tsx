/* global document */

import ReactDOM from 'react-dom';
import { FC } from "react";

export type PortalProps = {
    children: JSX.Element,
    query: string,
}

const Portal: FC<PortalProps> = (props: PortalProps) => {
    const { children, query } = props;
    if ( !process.browser ) {
        return <></>;
    }
    const elem = document.querySelector(query);

    if (elem) {
        return ReactDOM.createPortal(children, elem);
    } else {
        return <></>;
    }
};

Portal.defaultProps = {
    query: 'body',
};

export default Portal;
