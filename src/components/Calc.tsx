// @flow
import * as React from 'react';
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};
export const Calc = (props: Props) => {
    return <div className='calc'>
        {props.children}
    </div>;
};
