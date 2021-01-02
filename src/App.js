import React, {useState, useEffect, useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER": {
            return action.payload;
        }
        case "CHANGE_USER_ID": {
            return {
                ...state,
                id: action.payload
            };
        }
        case "CHANGE_USER_NAME": {
            return {
                ...state,
                name: action.payload
            };
        }
        default: {
            console.log('Not found case for action!')
            return state;
        }
    }
}

export default function App() {
    const initialState = {
        id: null,
        name: null,
        username: null,
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const [user, setUser] = useState();
    const [counter, setCounter] = useState(1)

    useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/users/${counter}`)
                .then(response => response.json())
                .then((json) => {
                    dispatch({type: "SET_USER", payload: json});
                });
        },
        [counter])

    const onClickIncHandler = () => {
        setCounter((prevState) => (prevState + 1));

    }
    const onClickDecHandler = () => {
        setCounter((prevState) => (prevState - 1));

    }
    const onClickNameHandler = () => {
        dispatch({type: 'CHANGE_USER_NAME', payload: state.name.toUpperCase() + '____Changed'})
    }
    const onClickIdHandler = () => {
        dispatch({type: 'CHANGE_USER_ID', payload: Math.floor(Math.random() * 500)})
    }
    return (
        <div>
            <h1>Counter: {counter}</h1>
            {!!state &&
            (
                <div>
                    <h3>User id: {state.id}</h3>
                    <h3>User name: {state.name}</h3>
                    <h3>User username: {state.username}</h3>
                    <h3>User city: {state.address.city}</h3>
                </div>
            )
            }
            <button onClick={onClickIncHandler}>Increment</button>
            <button onClick={onClickDecHandler}>Decrement</button>
            <button onClick={onClickNameHandler}>Change User name</button>
            <button onClick={onClickIdHandler}>Change User id</button>


        </div>
    );
}

