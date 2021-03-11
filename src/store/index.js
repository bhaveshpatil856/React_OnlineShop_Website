import { combineReducers } from "redux"
import { ShowUserCart, userCart, userLoginReducer, userRegisterReducer } from "../reducers/user";
import { addToCartReducer, getProductByIdReducer, getProductReducer } from "../reducers/products";
//import storage from 'redux-persist/lib/storage';
import storage from 'redux-persist/lib/storage'
const reducers = combineReducers({
                        register: userRegisterReducer,
                        login: userLoginReducer, 
                        product: getProductReducer, 
                        productId: getProductByIdReducer, 
                        cartItem: addToCartReducer,
                        usercart: userCart,
                        showUserCart: ShowUserCart    
                    });

export default reducers;

export const persistConfig = {
    key:"root",
    storage,
    whitelist:['showUserCart']
};