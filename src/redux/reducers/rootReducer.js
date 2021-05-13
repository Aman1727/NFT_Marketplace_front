import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import profileReducer from "./profileReducer";
import saleReducer from "./saleReducer";
import auctionReducer from "./auctionReducer";
import mysaleReducer from "./mysaleReducer";


const rootReducer = combineReducers({
    profileReducer,itemsReducer,saleReducer,auctionReducer,mysaleReducer
})
export default rootReducer;
