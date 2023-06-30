import React, { useState } from 'react'
import { Box } from '@mui/material'
import { Container } from '@mui/system'

import './Calculator.css'

export default function Calculator() {
    
    const[num, setNum] = useState(0);

    function inputNum (e) {
        var input =e.target.value;

        if (num === 0) {
            setNum(input);
        } else {
            setNum(num + input);
        }
    }

    function allClear () {
        setNum(0);
    }

    function clear () {
        if (!isNaN(num) && num.lenghth > 1) {
            setNum(num.slice(0, -1));
        } else {
            setNum(0);
        }
    }

    function percent () {
        setNum(num / 100)
    }

    function calculate () {
        console.log("Calculate teste")
    }

    return (
        <div>
            <Box m={5} />
            <Container maxWidth="xs">
                <div className="wrapper">
                    <Box m={3} />
                    <h1 className="result">{num}</h1>
                    <button className="ac-btn" onClick={allClear}>AC</button>
                    <button onClick={percent}>%</button>
                    <button>x²</button>
                    <button className="operation-btn">/</button>
                    <button className="number-btn" onClick={inputNum} value={7}>7</button>
                    <button className="number-btn" onClick={inputNum} value={8}>8</button>
                    <button className="number-btn" onClick={inputNum} value={9}>9</button>
                    <button className="operation-btn">*</button>
                    <button className="number-btn" onClick={inputNum} value={4}>4</button>
                    <button className="number-btn" onClick={inputNum} value={5}>5</button>
                    <button className="number-btn" onClick={inputNum} value={6}>6</button>
                    <button className="operation-btn">-</button>
                    <button className="number-btn" onClick={inputNum} value={1}>1</button>
                    <button className="number-btn" onClick={inputNum} value={2}>2</button>
                    <button className="number-btn" onClick={inputNum} value={3}>3</button>
                    <button className="operation-btn">+</button>
                    <button className="number-btn" onClick={inputNum} value={","}>,</button>
                    <button className="number-btn" onClick={inputNum} value={0}>0</button>
                    <button className="number-btn" onClick={clear}>⌫</button>
                    <button className="operation-btn" onClick={calculate}>=</button>
                </div>
            </Container>
        </div>
    )
}
