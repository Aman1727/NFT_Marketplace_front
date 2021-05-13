import {
    SET_AUCTIONITEMS  
  } from "../actions/actionConstant";
  
  const initilizeState= {
      auctions:[]
  }
  
  export default function auctionReducer(state=initilizeState, action){
      switch(action.type){
          case   SET_AUCTIONITEMS:
              return{
                  ...state,
                  auctions: action.auctions
              }
          default: return state;
      }
  }