import { ADD_QUANTITY, REMOVE_QUANTITY } from "../actions/product.type";
import { ERROR, LOGGED_USER, LOGIN_USER, USER_REGISTER, LOGOUT, USER_CART, SHOW_USER_CART} from "../actions/user.type";
import { addQuantityUtility, removeQuantityUtility } from "../shared/cartUtility";
// import { addCartUtility } from "../shared/cartUtility";

export const userRegisterReducer = (state=null , action) => {
    switch (action.type) {
        case USER_REGISTER:
            return { message: action.payload};
        case ERROR:
            return {error: action.payload};
        default: 
            return state;
    }
}

const INITIAL_STATE = () => {
    let user = JSON.parse(localStorage.getItem("currentUser"));
    return user ? user : {} ; 
}

export const userLoginReducer = (state=INITIAL_STATE , action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {message: action.payload};
        case LOGGED_USER:
            return {currentUserData: action.payload};
        case ERROR:
            return {error: action.payload};
        case LOGOUT:
            return {message: action.payload};
        default: 
            return state;
    }
}

const INITIAL_STATE_CART={
    storedata:[]
}

export const userCart = (state= INITIAL_STATE_CART, action) => {
    switch(action.type){
        case USER_CART:
            return {message: action.payload};
        case ERROR:
            console.log(action.payload)
            return {error: action.payload};
        
        default:
            return state;    
    }

}

export const ShowUserCart = (state= INITIAL_STATE_CART, action) => {
    switch(action.type){
        case ERROR:
            console.log(action.payload)
            return {error: action.payload};
        case SHOW_USER_CART:
            console.log(action.payload)
            return {storedata:action.payload, loading:false};
            // return {...state,storedata:addCartUtility(state.storedata,action.payload), loading:false};
        case ADD_QUANTITY:
            console.log(action.payload);
            return {...state,loading:false,addQuantity:addQuantityUtility(state.storedata, action.payload)};
        case REMOVE_QUANTITY:
            console.log(state);
            return {...state,addQuantity:removeQuantityUtility(state.storedata, action.payload),loading:false}
            
        default:
            return state;    
    }

}

