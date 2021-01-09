import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {incCounter,decCounter,resetCounter, fetchUsers} from "./redux";



export default function App() {
    const {counter, users} = useSelector(
        ({counter: { counter }, users: { users } }) => ({counter, users} ));
    const dispatch = useDispatch();


    //
    useEffect(() => {
            dispatch(fetchUsers());
        },
        [dispatch]);

    return (
        <div>
            <div>
            <h1>Counter: {counter}</h1>
    </div>
            {users.map((user)=>
            (
                <div>
                <h3>User id: {user.id}</h3>
                <h3>User name: {user.name}</h3>
                <h3>User username: {user.username}</h3>
                <h3>User company: {user.company.name}</h3>
                </div>
                )
            )
            }
            <button onClick={() => dispatch(incCounter())}>Increment</button>
            <button onClick={() => dispatch(decCounter())}>Decrement</button>
            <button onClick={() => dispatch(resetCounter())}>RESET</button>
            <button onClick={() => dispatch({type: 'CHANGE_USER_ID', payload: Math.floor(Math.random() * 500)})}>Change
                User id
            </button>


        </div>
    );
}

