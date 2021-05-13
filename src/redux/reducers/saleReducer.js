import {
  SET_SALEITEMS  
} from "../actions/actionConstant";

const initilizeState= {
    items:[]
}

export default function saleReducer(state=initilizeState, action){
    switch(action.type){
        case   SET_SALEITEMS:
            return{
                ...state,
                items: action.items
            }
        default: return state;
    }
}