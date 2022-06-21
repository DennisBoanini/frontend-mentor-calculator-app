// @flow
import * as React from 'react';
import { useState } from 'react';

type Props = {
    toggleTheme: (themeNumber: number) => void
}

export const ThreeStateToggle = (props: Props) => {

    const [themeSelected, setThemeSelected] = useState(1);

    const toggle = (themeNumber: number) => {
        setThemeSelected(themeNumber);
        props.toggleTheme(themeNumber);
    }

    return <div style={{ marginBottom: '1rem' }}>
        <div className="theme-numbers">
            <span>1</span>
            <span>2</span>
            <span>3</span>
        </div>
        <div className="three-toggle">
            <input id='one' className={`one ${themeSelected === 1 ? 'show' : null}`} type="radio" onClick={() => toggle(1)}/>
            <input className={`two ${themeSelected === 2 ? 'show' : null}`} type="radio" onClick={() => toggle(2)}/>
            <input className={`three ${themeSelected === 3 ? 'show' : null}`} type="radio" onClick={() => toggle(3)}/>
        </div>
    </div>;
};
