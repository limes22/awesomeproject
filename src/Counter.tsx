import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import { setConstantValue } from 'typescript';

type Iprops = {
    state: number,
};

export const Counter = (props: Iprops) => {
    const {state :newState} = props;
    console.log('나는카운터:', newState);
    useEffect(() => {

    }, []);
    const [state, setState] = useState(newState);
    // const {myNumber: temp} = props; 구조분해를 사용하는 이유 props에 정의 되어 있지 않은 값이 들어왔을때 예외처리가 손쉽다.
    const onIncrement = () => {
        setState(state + 1);
    };
    const onDecrement = () => {
        setState(state - 1);
    };

    return (
        <>
            <div className='Counter'>
                <h2> 카운터 </h2>
                <div>
                    {state}
                </div>
                <div>
                    <button onClick={onIncrement}>+</button>
                    <button onClick={onDecrement}>-</button>
                </div>
            </div>
        </>
    );
};

export default Counter;
