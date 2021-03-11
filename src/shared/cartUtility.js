import { UpdateCart } from "../api/user";

export const addCartUtility = (oldstate,nextAction) => {
    
    try {
    console.log(oldstate);
    console.log(nextAction);
    // const existingItem = oldstate.find(data=> data._id === nextAction._id);
    // console.log(existingItem);
    // if(existingItem){
    //     return oldstate.map(cartItem=>{
    //         return cartItem._id === nextAction._id ?
    //         {...cartItem,quantity: cartItem.quantity + 1}
    //         :
    //         cartItem;
    //     })
    // }
    // else{
    //     return [...oldstate,{...nextAction,quantity: 1}];
    // }
        
} catch (error) {
        console.log(error);
        return error; 
    }
    
    
};



export const addQuantityUtility = async(oldstate, nextAction) => {
    console.log(oldstate);
    console.log(nextAction);
    
    const existingItem = oldstate.find(data => data._id === nextAction._id);
    console.log(existingItem)
    
    if(existingItem){
       
        let q = existingItem.cartItems.quantity + 1;
       console.log(q);

    //    let data = {
    //        item : nextAction,
    //        quantity: q
    //    }

    //    console.log(data);

    //    let response = await UpdateCart(data);
    //    setTimeout(() => {
    //     console.log(response);
    // },3000);

        // existingItem.cartItems.quantity = response.data.cartItems.quantity

        // console.log(existingItem.cartItems.quantity);

       // return response.data.cartItems.quantity;
    }
    else{
        return [...oldstate];
    }
}

export const removeQuantityUtility = async(oldstate, nextAction) => {
    const existingItem = oldstate.find(data => data._id === nextAction._id);
    if(existingItem.cartItems.quantity > 1){
    
    //     let q = existingItem.cartItems.quantity - 1;
    //    console.log(q);

    //    let data = {
    //        item : nextAction,
    //        quantity: q
    //    }

    //    console.log(data);


    //    let response = await UpdateCart(data);
    //     console.log(response);

    //    // existingItem.cartItems.quantity = response.data.cartItems.quantity

    //     // console.log(existingItem.cartItems.quantity);

    //     return response.data.cartItems.quantity;
    
    
    
    
        // return existingItem.cartItems.quantity += (-1)
    }
    else{
        return [...oldstate];
    }
}
