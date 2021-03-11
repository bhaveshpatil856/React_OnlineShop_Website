import {productDetailById, removeItem, showProducts} from '../api/products';
import { FETCH_ALL_PRODUCT, ERROR, PRODUCT_DATA_BY_ID, LOADING, NAVIGATE_CART , CART_ERROR, ADD_QUANTITY,REMOVE_QUANTITY} from "../actions/product.type";
import { UpdateCart } from '../api/user';

import { history } from "../shared/helper/history";
import { SHOW_USER_CART} from './user.type';
// import { AddToCart } from '../api/user';

export const getProductAction = (data) => {
    return async(dispatch)=> {
        try {
            let response = await showProducts(data);
            // console.log(response);
            dispatch({type:FETCH_ALL_PRODUCT, payload: response.data.data});
        } 
        catch (error) {
            console.log(error);
            dispatch({type:ERROR, payload: error.response.data.message});
        }
    }
}


export const getProductByIdAction = (data) => {
    // console.log(data);
    return async(dispatch)=> {
        try {
            let response = await productDetailById(data);
            // console.log(response);
            dispatch({type:PRODUCT_DATA_BY_ID, payload: response});
        } 
        catch (error) {
            console.log(error);
            dispatch({type:ERROR, payload: error.response.data.message});
        }
    }
}

export const addToCartAction = (id) => {
    // console.log(id)
    return async(dispatch)=> {
        try {
            dispatch({type:LOADING});
            let response= await productDetailById(id);
            // console.log(response);
            setTimeout(() => {
                dispatch({type:SHOW_USER_CART,payload:response.data});
            },1000);
            window.location.reload();

        } 
        catch (error) {
            dispatch({type:CART_ERROR, payload:error.response});            
        }
    }
}

export const AddQuantity = (id) => {
    console.log(id);
    console.log(id.cartItems.quantity)
    return async(dispatch)=>{
        try {
            dispatch({type: LOADING});
           
            let q= id.cartItems.quantity + 1

            let data = {
                item : id,
                quantity: q
            }
     
            console.log(data);
     
            let response = await UpdateCart(data);
            
            setTimeout(() => {
             console.log(response);
         },3000);

            // let response= await UpdateCart(id);

            dispatch({type:ADD_QUANTITY,payload:id})
            window.location.reload();

        } catch (error) {
            dispatch({type:CART_ERROR,payload:error});           
        }
    }
}

export const RemoveQuantity = (id) => {
    return async(dispatch)=>{
        try {

            dispatch({type: LOADING});
            
            if(id.cartItems.quantity > 1){
    
                let q = id.cartItems.quantity - 1;
               console.log(q);
        
               let data = {
                   item : id,
                   quantity: q
               }
        
               console.log(data);
        
        
               let response = await UpdateCart(data);
                console.log(response);

            
            
            dispatch({type:REMOVE_QUANTITY,payload:id})
            window.location.reload();
            }
        } catch (error) {
            dispatch({type:CART_ERROR,payload:error});           
        }
    }
}


export const removeItemAction = (id) => {
    console.log(id._id);
    return async(dispatch)=> {



        try {
            //dispatch({type:LOADING});
            
            let response= await removeItem(id._id);
            console.log(response);
        window.location.reload();

            
            // setTimeout(() => {
            //     dispatch({type:REMOVE_FROM_CART,payload:response.data});
            // },1000);
        } 
        catch (error) {
            dispatch({type:CART_ERROR, payload:error.response});            
        }
    }
} 

export const navigateToCart = ( data ) =>{
    return async(dispatch)=>{
        console.log(data);
        dispatch({type: NAVIGATE_CART});
        history.push("/cart");
        window.location.reload();
    }
}