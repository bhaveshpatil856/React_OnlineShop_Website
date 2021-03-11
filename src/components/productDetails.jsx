import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import SimpleReactValidator from 'simple-react-validator';
import { getProductByIdAction, addToCartAction} from "../actions/product";
import { AddToUserCartAction, ShowUserCartAction } from "../actions/user";

class ProductDetails extends Component{
    constructor(){
        super();
        this.state={
            productId:"",
            userEmail:''
        }
        this.validator = new SimpleReactValidator({autoForceUpdate: this});
    }

    addToUserCart = () => {
        // console.log(this.props)
        // console.log(this.validator);
        // e.preventDefault();
        if(this.validator.allValid()){

            if(this.props.user){

                let item = {
                    productId:  this.props.productItem.data._id , 
                    userLogin: {
                        userEmail: this.props.user.user.userLogin.userEmail
                    },
                    quantity: 1
                };
                this.props.AddToUserCartAction(item);
                // console.log(a);
                // this.props.addToCartAction(this.props.productItem.data._id);
                
                // this.props.ShowUserCartAction(item);
        
                this.props.history.push('/cart');
            }
            else{
                this.props.history.push('/login');
            }

        }
        else{
            this.validator.showMessages();
            this.forceUpdate();
        }
    }


    // addCart = (id) => {
    //    // console.log(id)
    //     this.props.addToCartAction(id);
    //     this.props.history.push('/cart');
    // }

    componentDidMount(){
        // console.log(this.props.match.params.id)
        this.props.getProductByIdAction(this.props.match.params.id);
    }

    formatCurrency = (value) =>{
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'INR', currencyDisplay:'narrowSymbol'}).format(value);
    }  


    render(){

        // console.log(this.props.user);
        let data= this.props.productItem

        if(!data){return null}
        if(!data.data) {
            return <h1> LOADING.... </h1>
        }
        return (
            
            <div className="container" style={{marginTop:"20px"}}>
                <div className="row">
                    <div className="col-md-8">
                        <img className="card-img-top" src={data.data.image} alt={data.name} />
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{width: "20rem"}}>
                        {/* <img className="card-img-top" src={data.image} alt="Card image cap"/> */}
                            <div className="card-body">
                                <h4 className="card-title">{data.data.name}</h4>
                                <p className="card-text">{data.data.description}</p>
                                <h5 className="card-text"> {this.formatCurrency(data.data.offerPrice)}</h5>
                                <h6 className="card-text"> <del> {this.formatCurrency(data.data.price)}</del> </h6>
                            </div>
                            <button type="button" 
                                    className="btn btn-primary btn-lg" 
                                    style={{margin:"5px",backgroundColor:"green"}}
                                    onClick={()=> this.addToUserCart()}
                            >
                                ADD TO CART
                            </button>
                            <button type="button" 
                                    className="btn btn-primary btn-lg" 
                                    style={{margin:"5px"}}
                                    onClick={()=> this.props.history.push(`/findProductById/${data.data._id}`)}
                            >
                                BUY NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    // console.log(state.login.currentUserData);
    // console.log(state)
    return {
        user: state.login.currentUserData,
        loading: state.productId.loading, 
        productItem: state.productId.item};
}

export default connect(mapStateToProps,{getProductByIdAction,addToCartAction,AddToUserCartAction,ShowUserCartAction})(ProductDetails);



