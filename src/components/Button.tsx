// @flow
import * as React from 'react';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    cssClasses?: string;
    onKeyPress?: () => void;
};

export const Button = (props: Props) => {
    return (
        <div className={props.cssClasses} onClick={props.onKeyPress}>
            {props.children}
        </div>
    );
};
