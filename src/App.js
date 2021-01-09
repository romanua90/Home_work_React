import React from 'react';
import {useSelector} from "react-redux";


export default function App() {
    const store = useSelector((state) => state);
    console.log(store);

    return (
        <div>
            <h1>FAKE STORE</h1>
        </div>
    );
}