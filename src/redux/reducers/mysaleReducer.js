import {
    SET_MYITEMSONSALE
} from "../actions/actionConstant";

const initilizeState= {
    sellitems:[]
}

export default function mysaleReducer(state=initilizeState, action){
    switch(action.type){
        case SET_MYITEMSONSALE:
            return{
                ...state,
                sellitems: action.sellitems
            }
        default: return state;
    }
}