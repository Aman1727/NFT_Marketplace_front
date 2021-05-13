import {
    SET_PROFILE,
    SET_ACCOUNT
} from "../actions/actionConstant";

const initilizeState= {
    profile:null,
    account:null

}

export default function profileReducer(state=initilizeState, action){
    switch(action.type){
        case SET_PROFILE:
            return{
                ...state,
                profile: action.profile
            }

        
        case SET_ACCOUNT:
            return{
                ...state,
                account: action.account
            }
        
        default: return state;
    }
}