import {combineReducers} from "redux";
import counterReducer from './counter-reducer'
import usersReducer from './users-reducer'

export const reducer=combineReducers(
{   counter: counterReducer,
    users: usersReducer
});