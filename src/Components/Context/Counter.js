import React,{useContext} from 'react';
import {CounterContext , INCREMENT , DECREMENT} from './CounterContext'

const Counter = () => {
    const counterContext =useContext(CounterContext);
    const {count ,updateCount} = counterContext

    return (
        <div>
            <h2> {count}</h2>
            <button  onClick = {()=>updateCount({type : INCREMENT})}>Increment</button>
            <button  onClick = {()=>updateCount({type : DECREMENT})}>Decrement</button>
        </div>
    );
};

export default Counter;