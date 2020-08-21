import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode
}

const Scroll = (props: Props) => {
    return (
        <div style = {{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;