
import { FETCH_ALL_PRODUCT, ERROR, PRODUCT_DATA_BY_ID, ADD_TO_CART, CART_ERROR, LOADING, REMOVE_FROM_CART, NAVIGATE_CART } from "../actions/product.type"
import { addCartUtility } from "../shared/cartUtility";

export const getProductReducer = (state=[], action) => {
    switch(action.type){
        case FETCH_ALL_PRODUCT:
            return {item: action.payload};
        case ERROR:
            return {item: action.payload};
        default:
            return state;
    }
}

export const getProductByIdReducer = (state=[], action) => {
  //  console.log(action);
    switch(action.type){
        case PRODUCT_DATA_BY_ID:
            return {item: action.payload};
        case ERROR:
            return {item: action.payload};
        default:
            return state;
    }
}

const INITIAL_STATE={
    storedata:[]
}

export const addToCartReducer = (state=INITIAL_STATE,action) => {
    
    
    switch(action.type){
        case LOADING:
            return {...state,loading:true};
        case NAVIGATE_CART:
            return {...state,loading:false};
        case ADD_TO_CART:
            console.log(state);
            return {...state,storedata:addCartUtility(state.storedata,action.payload), loading:false};
        case REMOVE_FROM_CART:      
            return {...state,storedata:state.storedata.filter(item => item._id !== action.payload._id)}
        case CART_ERROR:
            return {item: action.payload};
        
        
        default:
            return state;
        
    }
}


