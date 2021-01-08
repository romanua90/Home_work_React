import {SET_USERS, TOGGLE_USER_STATUS, REMOVE_USER} from "../action-types";


const initialState={
    users:[]
}
const reducer = (state=initialState, action)=>{
    switch (action.type){
        case SET_USERS:{
            return {...state, users: action.payload};
        }
        case TOGGLE_USER_STATUS:{
            return {...state, users: []};
        }
        case REMOVE_USER:{
            return {...state, users: []};
        }
        default: {
            return state;
        }
    }
}
export default reducer;