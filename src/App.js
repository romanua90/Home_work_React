import React, {useEffect, useReducer, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'


export default function App() {
const counter=useSelector(({counter})=>counter)
const dispatch=useDispatch();
    return (
        <div>
            <h1>Counter: {counter}</h1>
            {/*{!!state.company &&*/}
            {/*(*/}
            {/*    <div>*/}
            {/*        /!*<h3>User id: {state.id}</h3>*!/*/}
            {/*        /!*<h3>User name: {state.name}</h3>*!/*/}
            {/*        /!*<h3>User username: {state.username}</h3>*!/*/}
            {/*        /!*<h3>User company: {state.company.name}</h3>*!/*/}
            {/*    </div>*/}
            {/*)*/}
            {/*}*/}
            <button onClick={()=>dispatch({type:'INC_COUNTER'})}>Increment</button>
            <button onClick={()=>dispatch({type:'DEC_COUNTER'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'RESET'})}>RESET</button>
            {/*<button onClick={onClickIdHandler}>Change User id</button>*/}


        </div>
    );
}

