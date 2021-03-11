import { AddToCart, ShowUserCart, userLogin, userRegister } from "../api/user";
import { ERROR, LOGIN_USER, USER_REGISTER,LOGOUT, USER_CART, SHOW_USER_CART } from "./user.type";
import {history} from "../shared/helper/history";
import { LoggedIN } from '../api/user';
import { LOGGED_USER } from './user.type';

export const userRegisterAction = (data) => {
    return async(dispatch) => {
        try {
            let response = await userRegister(data);
            console.log(response);
            dispatch({type: USER_REGISTER, payload: response.data.data});

            alert("registration Done....");
            history.push('/login');
            window.location.reload();
            
        } 
        catch(error){
            
            dispatch({type: ERROR, payload: error.response.data.message })            
            
        }
    }
}

export const userLoginAction = (data) => {
    return async(dispatch) => {
        try {
    // console.log(data)
            // console.log(data.userLogin.userEmail);
            // global.globaluser.update(data.userLogin.userEmail);
 
            let response = await userLogin(data);
            console.log(response);
            // let a = await ShowUserCart(data);


            
            localStorage.setItem("userEmail",JSON.stringify(data.userLogin.userEmail));   



            //alert(JSON.stringify(response.data.token));
            // localStorage.removeItem("persist:root");
            localStorage.setItem("currentUser",JSON.stringify(response.data.token));
            dispatch({type: LOGIN_USER, payload: response.data.data});
            alert("Login Successfull.......");
            // let a = ShowUserCartAction(data);
            // console.log(a);
            history.push('/home');
            window.location.reload();

        } catch (error) {
            console.log(error.response)
            dispatch({type: ERROR, payload: error.response.data.message});
        }
    }
}

export const UserLogged = (token) => {
    return async(dispatch) => {
        try {
            // console.log(token);
            let response = await LoggedIN(token);
            // console.log(response.data);
            dispatch({type: LOGGED_USER, payload: response.data});
        } catch (error) {
            dispatch({type: ERROR, payload: error.response});
        }
    }
}

export const Logout = () => {
    return async(dispatch) => {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("persist:root");
        dispatch({type:LOGOUT});
        history.push('/login');
        window.location.reload();
    }
}

export const AddToUserCartAction = (data) =>{
    return async(dispatch)=> {
        try{
            console.log(data);
            let response = await AddToCart(data);
            console.log(response);
            dispatch({type: USER_CART,payload: response.data});
            window.location.reload();
            
        } 
        catch(error){
            console.log(error);
            dispatch({type: ERROR, payload: error.response})            
        }
    }
}

export const ShowUserCartAction = (data) =>{
    return async(dispatch)=> {
        try{
            console.log(data);
            let response = await ShowUserCart(data);
            console.log(response);
            dispatch({type: SHOW_USER_CART ,payload: response.data});
            
        } 
        catch(error){
            console.log(error);
            dispatch({type: ERROR, payload: error.response })            
        }
    }
}