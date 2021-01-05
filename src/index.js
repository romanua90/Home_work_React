import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore} from "redux";

const initialState={counter:1}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "SET_USER": {
            return {
                ...state,
                ...action.payload
            };
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
        case "INC_COUNTER":{
            return {
                ...state,
                counter: (state.counter<10) ? state.counter+1 : state.counter
            };
        }
        case "DEC_COUNTER":{
            return {
                ...state,
                counter: (state.counter>1) ? state.counter-1 : state.counter
            };
        }
        case "RESET":{
            console.log(state);
            return {
                ...state,
                counter: 0
            };
        }
        default: {
            console.log('Not found case for action!')
            return state;
        }
    }
}

const store=createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
