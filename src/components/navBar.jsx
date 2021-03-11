import React, { Component } from "react";
import {Navbar, Nav} from 'react-bootstrap';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { navigateToCart } from "../actions/product";
import {UserLogged,Logout, ShowUserCartAction} from '../actions/user';

class NavigationBar extends Component{

    constructor(props){
        super();
    }

    navCart = () => {
        console.log(this.props)

        // this.props.ShowUserCartAction(this.props.loggedIn);

        this.props.navigateToCart(this.props);
    }

    componentDidMount(){
        
        let token = JSON.parse(localStorage.getItem("currentUser"));
        // console.log(token);
        if(token){
            this.props.UserLogged(token);
        }
    }

    render(){
    //    console.log(this.props.loggedIn)
        return(
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/home">QWERTY</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                </Nav>

                {
                    this.props.loggedIn ?
                    <Nav inline="true">
                        <div className="row">
                    <div className="col" >
                        <span className="text-white">Hello,{this.props.loggedIn.user.firstname} {this.props.loggedIn.user.lastname}</span>
                        {/* <Nav.Link as={Link} to="/cart" >Cart</Nav.Link> */}
                    </div>
                    <div className="col-md-2" inline="true">    
                    <Nav.Link 
                        onClick={this.navCart}>
                    Cart 
                            {/* {
                                console.log(this.props.cartData.length)
                                <span className="badge badge-light">
                                    {this.props.cartData.length}
                                </span>
                                :                                this.props.cartData.length > 0 ?

                                null
                            } */}
                        </Nav.Link>
                        </div>
                        <div className="col">
                        <Nav.Link 
                            onClick={()=>this.props.Logout()}
                        >
                            LOGOUT</Nav.Link>
                        </div>
                        </div>
                    </Nav>

                    
                    
                    :


                    <Nav>
                    <Nav.Link as={Link} to="/register" >Register</Nav.Link>
                    <Nav.Link as={Link} to="/Login" >Login</Nav.Link>
                </Nav>
                }




                
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state.login.currentUserData);
    // return state
    return {
        cartData:state.cartItem.storedata,
        loggedIn:state.login.currentUserData};
}

export default connect(mapStateToProps,{UserLogged,navigateToCart,Logout,ShowUserCartAction})(NavigationBar);

// export default NavigationBar;
