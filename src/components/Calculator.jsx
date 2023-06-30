import React from 'react'
import { Box } from '@mui/material'
import { Container } from '@mui/system'

import './Calculator.css'

export default function Calculator() {
    return (
        <div>
            <Box m={5} />
            <Container maxWidth="xs">
                <div className="wrapper">
                    <Box m={15} />
                    <h1 className="result">257</h1>
                    <button className="ac-btn">AC</button>
                    <button>%</button>
                    <button>x²</button>
                    <button className="operation-btn">/</button>
                    <button className="number-btn">7</button>
                    <button className="number-btn">8</button>
                    <button className="number-btn">9</button>
                    <button className="operation-btn">*</button>
                    <button className="number-btn">4</button>
                    <button className="number-btn">5</button>
                    <button className="number-btn">6</button>
                    <button className="operation-btn">-</button>
                    <button className="number-btn">1</button>
                    <button className="number-btn">2</button>
                    <button className="number-btn">3</button>
                    <button className="operation-btn">+</button>
                    <button className="number-btn">,</button>
                    <button className="number-btn">0</button>
                    <button className="number-btn">⌫</button>
                    <button className="operation-btn">=</button>
                </div>
            </Container>
        </div>
    )
}
