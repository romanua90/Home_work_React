import React, { useState, useEffect, useReducer} from 'react';


export default function App() {

    const [user, setUser] = useState();
    const [counter, setCounter] = useState(1)

    useEffect(() => {
           fetch(`https://jsonplaceholder.typicode.com/users/${counter}`)
                .then(response => response.json())
                .then((json)=> {
                  setUser(json);
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
        setUser((prevState) => ({...prevState, name: prevState.name + '!'}))
    }
    return (
        <div>
            <h1>Counter: {counter}</h1>
            {!!user &&
            (
                <div>
                    <h3>User id: {user.id}</h3>
                    <h3>User name: {user.name}</h3>
                    <h3>User username: {user.username}</h3>
                    <h3>User city: {user.address.city}</h3>
                </div>
            )
            }
            <button onClick={onClickIncHandler}>Increment</button>
            <button onClick={onClickDecHandler}>Decrement</button>
            <button onClick={onClickNameHandler}>Change User name</button>


        </div>
    );
}

