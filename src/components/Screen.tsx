// @flow
import * as React from 'react';

type Props = {
    value: string;
};

export const Screen = (props: Props) => {
    return (
        <div className='screen'>
            <h1>{props.value}</h1>
        </div>
    );
};
