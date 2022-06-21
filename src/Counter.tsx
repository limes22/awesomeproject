import * as React from 'react';
import {useState, useEffect, useRef} from 'react';


const Counter = () => {
    const [state, setState] = useState(0)
    const onIncrement = () => {
        setState(state + 1)
    }
    const onDecrement = () => {
        setState(state -1)
    }
    

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
    )
}

export default Counter;
