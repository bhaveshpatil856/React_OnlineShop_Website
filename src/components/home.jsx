import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { getProductAction } from "../actions/product";
import Product from "./product";

class Home extends Component{
    
    constructor(props){
        super();
    }

    componentDidMount(){
        this.props.getProductAction();
    }
    
    render(){

        console.log(global.globaluser);

       // console.log(this.props.items);
        if(!this.props.items) { return <h1>LOADING.....</h1>}
        return(
            <div className="container">
                <h2>All Products</h2>
                <div className="row">
                    {
                        this.props.items.map((item) => (
                            <div className="col-md-4 mt-3" style={{display:'flex'}} key={item._id}>
                                <Product datas={item} {...this.props}/>
                            </div>
                        ))
                    }

                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    console.log(state);
    return {items:state.product.item};
}

export default connect(mapStateToProps,{getProductAction})(Home);