import * as React from 'react';
import {useState, useEffect, useRef} from 'react';

const Stack = () => {
    // let stack : any[] = [10];
    const [stack, setStack] = useState<any>([10]);

    const [inputNumber, setInputNumber] = useState(0);
    const push = () => {
        setInputNumber(inputNumber + 1);
        stack.push(inputNumber)
        setStack(stack);
        console.log(stack);
    }

    const pop = () => {
        stack.pop();
    }

    return(
    <>
    <div>
        <a>
        {inputNumber}
        <br></br>
        {stack}
            <button onClick={push}>push</button>
            <button onClick={pop}>pop</button>
        </a>
    </div>
    </>
    );
}

export default Stack;

