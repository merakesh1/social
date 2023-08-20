import React, { useState } from 'react'

const Demo = () => {
    const [symbol, setSymbol] = useState("+");
    const [count, setCount] = useState(0);
    const [num1, setnum1] = useState(0);
    const [num2, setnum2] = useState(0);
    const [res, setRes] = useState(0);
    const handleClick = (symbol) => {
        setSymbol(symbol);
        setCount(count => count + 1);
    }

    const handlereset = () => {
        setSymbol("+");
        setnum1(0);
        setnum2(0);
        setRes("");
    }

    const handlenum1 = (event) => {
        setnum1(event.target.value);
    };

    const handlenum2 = (event) => {
        setnum2(event.target.value);
    };

    const handleResult = () => {
        const n1 = Number(num1);
        const n2 = Number(num2);

        if (symbol === "+") setRes(n1 + n2);
        else if (symbol === "-") setRes(n1 - n2);
        else if (symbol === "*") setRes(n1 * n2);
        else if (symbol === "/") {
            if (num2 === 0) {
                setRes("cannot divide by 0");
            }
            else {
                setRes(n1 / n2);
            }
        }
    }
    return (
        <>
            <p>output: { }</p>
            <h1>Total operation-{count}</h1>
            <h2>Result is: {res}</h2>
            <form>
                <input type="number" value={num1} onChange={handlenum1} />
                &nbsp;&nbsp;
                <span>{symbol}</span>
                &nbsp;&nbsp;
                <input type="number" value={num2} onChange={handlenum2} />
                <br />
                <br />
                <input type="button" value="+" onClick={() => handleClick("+")} />&nbsp;&nbsp;
                <input type="button" value="-" onClick={() => handleClick("-")} />&nbsp;&nbsp;
                <input type="button" value="*" onClick={() => handleClick("*")} />&nbsp;&nbsp;
                <input type="button" value="/" onClick={() => handleClick("/")} />
                <input type="button" value="reset" onClick={handlereset} />
                <input type="button" value="get result" onClick={handleResult} />
            </form>
        </>
    )
}

export default Demo;
