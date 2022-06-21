import React, { useEffect, useState } from 'react';
import { ECalcValue } from "./calc-value.enum";
import { Header } from "./components/Header";
import { Calc } from "./components/Calc";
import { Button } from "./components/Button";
import { Screen } from "./components/Screen";
import './Theme1.scss';

function App() {

    useEffect(() => {
        console.table([{total, operator, temp}]);
    })

    const ERROR_STATEMENT = 'You cannot divide by 0';
    const [total, setTotal] = useState<string | null>(null)
    const [operator, setOperator] = useState<string | null>(null)
    const [temp, setTemp] = useState<string | null>(null)
    const [theme, setTheme] = useState<number>(1)

    const handleNumberClick = (value: ECalcValue) => {
        if (operator === null) {
            if (total === null || total === ERROR_STATEMENT) {
                setTotal(value)
                return;
            } else {
                const newTotal = total.concat(value);
                setTotal(newTotal);
            }
        } else {
            if (temp === null) {
                setTemp(total)
                setTotal(value)
            } else {
                const newTotal = total!.concat(value);
                setTotal(newTotal);
            }
        }
    }

    const handleOperatorClick = (selectedOperator: ECalcValue) => {
        if (total === ERROR_STATEMENT) {
            return;
        }

        if (total !== null && total[total.length - 1] === '.') {
            return;
        }

        if (temp !== null && temp[temp.length - 1] === '.') {
            return;
        }

        if (total !== null && temp !== null) {
            setTotal(eval(`${temp}${operator}${total}`).toString())
            setTemp(null)
            setOperator(selectedOperator);
            return
        }
        setOperator(selectedOperator);
    }

    const handleDeletePress = () => {
        if (total === ERROR_STATEMENT) {
            setTotal(null);
            return;
        }

        if (total === null && temp === null) {
            return;
        }

        if (total !== null) {
            const newTotal = total.slice(0, -1);
            setTotal(newTotal);
        }
    }

    const handleResetPress = () => {
        setTotal(null)
    }

    const handleEqualPress = () => {
        if (temp === null || total === null) {
            return;
        }

        if (total === '0' && operator === '/') {
            setTotal(ERROR_STATEMENT)
            setOperator(null)
            setTemp(null)
            return;
        }

        setTotal(eval(`${temp}${operator}${total}`).toString())
        setTemp(null)
        setOperator(null);
    }

    const handleDecimalSeparatorClick = () => {
        if (total === null || total === ERROR_STATEMENT) {
            setTotal('0.');
            return;
        }

        const separator = total.includes('.');
        if (separator) {
            return;
        }

        const newTotal = total.concat('.');
        setTotal(newTotal)
    }

    const handleThemeChange = (themeNumber: number) => {
        console.log('theme', themeNumber)
        setTheme(themeNumber)
    }

    return (
        <div className={`app-container theme-${theme}`}>
            <div style={{width: '40%'}}>
                <Header onThemeChange={(themeNumber: number) => handleThemeChange(themeNumber)}/>
                <Screen value={total ?? '0'}/>
                <Calc>
                    <div className='row'>
                        <Button cssClasses='key' onKeyPress={() => handleNumberClick(ECalcValue.SEVEN)}>
                            <span className="num">7</span>
                        </Button>
                        <Button cssClasses='key' onKeyPress={() => handleNumberClick(ECalcValue.EIGHT)}>
                            <span className="num">8</span>
                        </Button>
                        <Button cssClasses='key' onKeyPress={() => handleNumberClick(ECalcValue.NINE)}>
                            <span className="num">9</span>
                        </Button>
                        <Button cssClasses='key del' onKeyPress={() => handleDeletePress()}>
                            <span className="del-label">DEL</span>
                        </Button>
                    </div>
                    <div className='row'>
                        <Button cssClasses='key' onKeyPress={() => handleNumberClick(ECalcValue.FOUR)}>
                            <span className="num">4</span>
                        </Button>
                        <Button cssClasses='key' onKeyPress={() => handleNumberClick(ECalcValue.FIVE)}>
                            <span className="num">5</span>
                        </Button>
                        <Button cssClasses='key' onKeyPress={() => handleNumberClick(ECalcValue.SIX)}>
                            <span className="num">6</span>
                        </Button>
                        <Button cssClasses='key' onKeyPress={() => handleOperatorClick(ECalcValue.ADD)}>
                            <span className="num">+</span>
                        </Button>
                    </div>
                    <div className='row'>
                        <Button cssClasses='key' onKeyPress={() => handleNumberClick(ECalcValue.ONE)}>
                            <span className="num">1</span>
                        </Button>
                        <Button cssClasses='key' onKeyPress={() => handleNumberClick(ECalcValue.TWO)}>
                            <span className="num">2</span>
                        </Button>
                        <Button cssClasses='key' onKeyPress={() => handleNumberClick(ECalcValue.THREE)}>
                            <span className="num">3</span>
                        </Button>
                        <Button cssClasses='key' onKeyPress={() => handleOperatorClick(ECalcValue.SUB)}>
                            <span className="num">-</span>
                        </Button>
                    </div>
                    <div className='row'>
                        <Button cssClasses='key' onKeyPress={() => handleDecimalSeparatorClick()}>
                            <span className="num">.</span>
                        </Button>
                        <Button cssClasses='key' onKeyPress={() => handleNumberClick(ECalcValue.ZERO)}>
                            <span className="num">0</span>
                        </Button>
                        <Button cssClasses='key' onKeyPress={() => handleOperatorClick(ECalcValue.DIV)}>
                            <span className="num">/</span>
                        </Button>
                        <Button cssClasses='key' onKeyPress={() => handleOperatorClick(ECalcValue.MULTIPLY)}>
                            <span className="num">x</span>
                        </Button>
                    </div>
                    <div className='row last-row'>
                        <Button cssClasses='key reset' onKeyPress={() => handleResetPress()}>
                            <span className="reset-label">RESET</span>
                        </Button>
                        <Button cssClasses='key equal' onKeyPress={() => handleEqualPress()}>
                            <span className="equal-label">=</span>
                        </Button>
                    </div>
                </Calc>
            </div>
        </div>
    )
}

export default App;
