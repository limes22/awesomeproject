import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import { setConstantValue } from 'typescript';

type Iprops = {
    counterValue: number,
};

export const Counter = (props: Iprops) => {
    const {counterValue :inputValue} = props;
    console.log('나는카운터:', inputValue);
    
    //1. 상태 변수를 할당하는 리액트훅이다.
    //상태 변수는 업데이트가 일어나면 반드시 렌더링이 일어난다.
    //2. useState 는 배열 형태로 선언이 되는데 첫번째 인자가 상태 변수, 두번째가 상태 변수를
    //갱신하는 함수 useState 파라미터는 상태 변수를 초기화 하는 값.
    //상태 변수 초기화는 최초 컴포넌트가 마운트 될 때만 이루어진다.
    const [state, setState] = useState(inputValue);
    // const {myNumber: temp} = props; 구조분해를 사용하는 이유 props에 정의 되어 있지 않은 값이 들어왔을때 예외처리가 손쉽다.
    
    //1. 첫번째 인자로 callback 함수 두번째 인자로 dep array 를 갖는다.
    //2. 컴포넌트가 Update될 때 dep Array의 설정값에 따라 실행여부가 결정 
    //3. UseEffect가 재실행될때 CallBack함수의 Return 함수가 실행
    useEffect(() => {
        setState(inputValue);
        return () => {
            console.log('counter over');
        };
    }, [inputValue]);

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
