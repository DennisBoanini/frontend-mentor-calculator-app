// @flow
import * as React from 'react';
import { ThreeStateToggle } from "./ThreeStateToggle";

type Props = {
    onThemeChange: (themeNumber: number) => void
};

export const Header = (props: Props) => {
    return (
        <div className='header'>
            <p className="calc-label">calc</p>
            <div className='theme-container'>
                <p className="theme-label">THEME</p>
                <ThreeStateToggle toggleTheme={(themeNumber) => props.onThemeChange(themeNumber)}/>
            </div>
        </div>
    );
};
