import axios from 'axios';
import {Header} from '../shared/helper/header'

let Register_URL = "http://localhost:4800/api/newUser";
let Login_URL = "http://localhost:4800/api/userLogin";
let Loggedin_URL = "http://localhost:4800/api/me";
let AddCart_URL = "http://localhost:4800/api/addToCart";
let ShowUserCart_URL = "http://localhost:4800/api/cartByUser";
let updateCart_URL = "http://localhost:4800/api/updateCart";

let config = {
    headers: {
        "Content-type" : "application/json"
    }
}


export const userRegister = (data) => {
    //console.log(data);
    
    return axios.post(Register_URL, JSON.stringify(data), config );
}

export const userLogin = (data) => {
    //console.log(axios.post(Login_URL, JSON.stringify(data), config));
    return axios.post(Login_URL, JSON.stringify(data), config );
}


export const LoggedIN = (data) => {
    try{
        // console.log(axios.get(Loggedin_URL, {headers:Header(),config} ))
        return axios.get(Loggedin_URL, {headers:Header(),config} );
    
    }
    catch(e){
        console.log(e)
    }
}

export const AddToCart = (data) => {
    //console.log(data);
    
    return axios.post(AddCart_URL, JSON.stringify(data), config );
}

export const ShowUserCart = async(data) => {
    // console.log(data.userLogin);
  // console.log(JSON.stringify(data));
   
   let mail = {
       userEmail: data
   }
   
   let b= JSON.stringify(mail);
console.log(b);

   let a= await axios.post(ShowUserCart_URL, b, config );
   console.log(a) 
    return a;
}

export const UpdateCart = async(data) => {
try {
   // console.log(data.cartItems.quantity);
   console.log(data.item._id)
    
   return await axios.put(`${updateCart_URL}/${data.item._id}`, JSON.stringify(data), config);
} catch (error) {
    console.log(error);
    
}}

