import {
    SET_PROFILE,
    SET_ACCOUNT,
    SET_MYITEMS,
    SET_SALEITEMS,
    SET_MYITEMSONSALE,
    SET_AUCTIONITEMS
} from "./actionConstant";



export const setProfile = (result) => {
    return {
        type: SET_PROFILE,
        profile: result
    }
}
export const setAccount = (acc) => {
    return {
        type: SET_ACCOUNT,
        account: acc
    }
}

export const setMyitems = (items) => {
    return {
        type: SET_MYITEMS,
        items
    }
}

export const setSaleitems = (items) => {
    return {
        type: SET_SALEITEMS,
        items
    }
}
export const setMyitemsonsale = (items) => {
    return {
        type: SET_MYITEMSONSALE,
        sellitems:items
    }
}
export const setAuctionitems = (auctions) => {
    return {
        type: SET_AUCTIONITEMS,
        auctions
    }
}







// export const getProfile = () =>{
//     return function (dispatch){
//         dispatch(requestLogin())
//         Api.LoginApi().then((result)=>{
//             dispatch(successLogin(result))
//         }).catch(error=>{
//             dispatch(failure(error))
//         })
//     }
// }


