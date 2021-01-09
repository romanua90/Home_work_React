import {SET_USERS} from "../action-types";

export const setUsers=(payload)=> ({type: SET_USERS, payload})
export const fetchUsers=()=> async(dispatch)=>{
    console.log('called')
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');

        const data = await response.json();
        dispatch(setUsers(data));
    } catch (e) {
        console.error(e)
    }
};