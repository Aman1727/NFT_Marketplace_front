import {
    SET_MYITEMS
} from "../actions/actionConstant";

const initilizeState= {
    items:[],
}

export default function itemsReducer(state=initilizeState, action){
    switch(action.type){
        case SET_MYITEMS:
            return{
                ...state,
                items: action.items
            }
        default: return state;
    }
}