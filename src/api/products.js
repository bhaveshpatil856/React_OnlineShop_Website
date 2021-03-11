import axios from 'axios';

let product_URL = "http://localhost:4800/api/allProducts";
let productDetails_URL = "http://localhost:4800/api/findProductById";
let removeItemFromCart = "http://localhost:4800/api/removeCartItem";

let config = {
    headers: {
        "Content-type" : "application/json"
    }
}

export const showProducts = () => {
    return axios.get(product_URL, config);
};


export const productDetailById = async(id) => {
    // console.log(id)
    // console.log(await axios.get(`${productDetails_URL}/${id}`, config));
   return await axios.get(`${productDetails_URL}/${id}`, config);   
};

export const removeItem = async(id) => {
    console.log(id);
    return await axios.delete(`${removeItemFromCart}/${id}`,config);
}