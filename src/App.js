import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'


export default function App() {
    const state = useSelector((state)=>state);
    const counter = useSelector(({counter}) => counter)
    const dispatch = useDispatch();
    //
    useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/users/${counter}`)
                .then(response => response.json())
                .then((json) =>
                    dispatch({type: "SET_USER", payload: json})
                );
        },
        [counter, dispatch])
    return (
        <div>
            <h1>Counter: {counter}</h1>
            {!!state.company   &&
            (
                <div>
                    <h3>User id: {state.id}</h3>
                    <h3>User name: {state.name}</h3>
                    <h3>User username: {state.username}</h3>
                    <h3>User company: {state.company.name}</h3>
                </div>
            )
            }
            <button onClick={() => dispatch({type: 'INC_COUNTER'})}>Increment</button>
            <button onClick={() => dispatch({type: 'DEC_COUNTER'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>
            <button onClick={() => dispatch({type: 'CHANGE_USER_ID ', payload: Math.floor(Math.random() * 500)})}>Change
                User id
            </button>


        </div>
    );
}

