import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { AddQuantity, removeItemAction, RemoveQuantity } from '../actions/product';


class CartItem extends Component {

    constructor(props){
        super();
    }

    formatCurrency = (value) =>{
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'INR', currencyDisplay:'narrowSymbol'}).format(value);
    }

    // AddQaun = (data) => {
    //     console.log(data)
    //     console.log(data.cartItems.quantity);
    //     let item= {
    //       id: data._id,
    //       quantity: data.cartItems.quantity
    //     };
    //     console.log(item)
    //     this.props.AddQuantity(item);
    // }


    removeItem=()=>{
        console.log(this.props.data);
        let a= this.props.removeItemAction(this.props.data)

        console.log(a);
        // this.props.ShowUserCartAction(this.props)

    }




    render(){

        // console.log(this.props.data.cartItems.)
// 
    return(
        

        <div className="card w-100" style={{padding:'10px'}}>
            <div className="row" style={{marginTop:'2px'}}>
                <div className="col-md-4">
                    <div className="card" style={{width: "100%"}}>
                        <img className="card-img-top" src={this.props.data.cartItems.image} alt=""/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card" style={{width: "100%",marginLeft:'5px'}}>
                        <div className="col">
                            <h3 className="card-title">{this.props.data.cartItems.name}</h3>
                            <div className="row" style={{marginLeft:'5px'}}>
                                <h5 className="card-text">{this.formatCurrency(this.props.data.cartItems.offerPrice * this.props.data.cartItems.quantity)}</h5> 
                                <h6 className="card-text"> <del>{this.formatCurrency(this.props.data.cartItems.price * this.props.data.cartItems.quantity) }</del> </h6>
                            </div>
                            <div className="row" style={{margin:'5px'}}>
                                <button type="button" 
                                        className="btn btn-info"
                                        onClick={() => this.props.RemoveQuantity(this.props.data)}
                                        >
                                            - 
                                        </button>
                                <h4 style={{margin:"3px",padding:"5px",width:"10%"}}> <center> {console.log(this.props.data.cartItems.quantity)}{this.props.data.cartItems.quantity} </center> </h4>        
                                <button type="button" 
                                        className="btn btn-info"
                                        onClick={() => this.props.AddQuantity(this.props.data)}
                                        > 
                                            + 
                                        </button>
                                <button className="btn btn-danger ml-auto"
                                        onClick={()=> this.removeItem()}>
                                            Remove
                                        </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            
        
    )
}
}

const mapStateToProps = (state) =>{
//    console.log(state)
    return state;
}

export default connect(mapStateToProps,{AddQuantity,RemoveQuantity,removeItemAction})(CartItem);



