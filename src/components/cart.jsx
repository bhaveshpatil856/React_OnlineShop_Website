import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCartAction } from '../actions/product';
import { ShowUserCartAction } from '../actions/user';
import CartItem from './cartItem';

class Cart extends Component{

    constructor(props){
        super(props);
        // console.log(this);
        this.state={
            currentUser: ''
        }
        // console.log(this)
        // console.log(this.props);

        // console.log(this.state.currentUser);

    }

    // ShowCart = (user) => {
    //     // console.log(e);
    //     // let user= this.props.user;
    //     console.log(user);
    //     this.props.ShowUserCartAction(user);
    //     // console.log(a);
    // }


// fetchCart=(item) => {
//     let  b= this.props.ShowUserCartAction(item);
//         console.log(b)
//     }



    countItem=(value) => {
        //console.log(value);
        let item=0;
        value.cartItems.storedata.map(quantity=>(
            // console.log(quantity.cartItems)
           item= item + quantity.cartItems.quantity
        ))
        // console.log(item)
        return item;
    }

    // xyz=() =>{
    //     this.setState({currentUser: (this.props.user.currentUserData) });

    //     // this.setState({currentUser: a})
    // }

    totalPrice=(value) => {
        let price = 0;
        value.cartItems.storedata.map(item=>(
            // console.log(item)
            price = price + (item.cartItems.price * item.cartItems.quantity)
        ))
        // console.log(price)
        return price;
    }

    discount=(value) => {
        let discount=0;
        value.cartItems.storedata.map(item=>(
            // console.log(item.price)
            discount = discount + ((item.cartItems.price - item.cartItems.offerPrice) * item.cartItems.quantity)
        ))
        // console.log(discount)
        return discount;
    }

    amount=(value) => {
        let amount=0;
        value.cartItems.storedata.map(item=>(
            // console.log(item.price)
            amount = amount + (item.cartItems.offerPrice * item.cartItems.quantity)
        ))
        // console.log(discount)
        return amount;
    }

    formatCurrency = (value) =>{
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'INR', currencyDisplay:'narrowSymbol'}).format(value);
    }

    componentDidMount(){


        let Email= JSON.parse(localStorage.getItem('userEmail'))


        console.log(Email);
        this.props.ShowUserCartAction(Email);
    }

    render(){
         
//         console.log(localStorage.getItem('userEmail'));

//         // console.log(this.props.user);
        
//         // this.props.ShowUserCartAction(this.props.user)

//         if(this.props.user){
//             console.log(this.state.currentUser);
//             console.log(this.props.user.currentUserData);
//             console.log(this.state.currentUser)
//         }


// // this.xyz();

//         // this.xyz(this.props.user.currentUserData);

//        while(!this.props.user){
//            console.log(this.props.user);
//             return <h1>Loading.....</h1>
//         }

//         // console.log(this.props.user);

//         // this.props.ShowUserCartAction(this.props.user.currentUserData)

//         // let a = this.ShowCart(this.props.user)
//         // console.log(a);

        if(this.props.cartItems.storedata.length === 0){
            return(
                <h1>EMPTY CART</h1>
            )
        }


        return(
                    // <h1>EMPTY CART</h1>
                <div className="container" style={{marginTop:'20px'}}>
                    <div className="row">
                        <div className="col-md-8">
                            {
                                // console.log(this.props.cartItems.toredata)
                                this.props.cartItems.storedata.map( data => (
                                <CartItem data={data} key={data._id} />
                                ))
                            }
                        </div>
                    <div className="col-md-4" >
                        <div className="card" style={{padding:'10px',marginLeft:"2px",width:"100%"}}>
                            <div className="col">
                                <h5>PRICE DETAILS</h5><hr/>
                                    <div className="row">
                                        <h6>Total Items :</h6>
                                        <h6 className="ml-auto">
                                        {
                                            this.countItem(this.props)
                                        }
                                        </h6>    
                                    </div>
                                    <div className="row">
                                    <h6>Price :</h6>
                        <h5 className="ml-auto"> 
                        {
                         this.formatCurrency(this.totalPrice(this.props)) 
                        }
                        </h5>    
                    </div>
                    <div className="row">
                        <h6>Discount :</h6>
                        <h6 className="ml-auto"> - {
                           this.formatCurrency(this.discount(this.props))
                        } 
                        </h6>    
                    </div>
                    <hr></hr>
                    <div className="row">
                        <h6> Total Amount:</h6>
                        <h4 className="ml-auto" style={{color:'green'}}>
                        {
                            this.formatCurrency(this.amount(this.props))
                        }
                        </h4>    
                    </div>
                    <hr/>
                    </div>
                    <button className="btn btn-success ml-auto ">Place Order</button>
                </div>
                
                </div>  
                </div>
                </div>        
                
        )
    }
    }



const mapStateToProps= (state) => {
    console.log(state);
    return {
        user: state.login,
        cartItems:state.showUserCart,
        loading:state.usercart.loading        
    };
}

export default connect(mapStateToProps,{addToCartAction,ShowUserCartAction})(Cart);