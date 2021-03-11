import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import {userLoginAction, ShowUserCartAction} from "../actions/user"

class Login extends Component{

    constructor(){
        super();
        this.state = {
            userEmail:"",
            userPassword:"",
        }
        this.validator = new SimpleReactValidator({autoForceUpdate: this});

    }

    // ShowCart = () => {
    //     // console.log(e);
    //     // let user= this.props.user;
    //     console.log(this.state);
        
    //     // console.log(a);
    // }



    

    
    HandleFormData = (e) => {
        e.preventDefault();
        if(this.validator.allValid()){
            let item= {
                userLogin: {
                    userEmail: this.state.userEmail,
                    userPassword: this.state.userPassword
                },
            };
            let a = this.props.ShowUserCartAction(item.userLogin.userEmail);
            console.log(a);
            this.props.userLoginAction(item);
            // this.props.ShowUserCartAction(item);
            // this.ShowCart(item);
        }
        else{
            this.validator.showMessages();
            this.forceUpdate();
        }
        // this.props.ShowUserCartAction(this.props.item);
    }

    handleInputData= (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return (
            <div className="container" style={{marginTop:'20px'}}>
                <div className="row">
                    <div className="col-md-8">
                        {
                            this.props.errorMessage != null?
                            <h5 className='alert alert-danger'>
                                {this.props.errorMessage.error}
                            </h5>
                            : ''
                        }
                      <form onSubmit={this.HandleFormData}>
                       <div className="form-group">
                            <input className="form-control" 
                                   type="email"
                                   placeholder="userEmail"
                                   name="userEmail"
                                   value={this.state.userEmail}
                                   onChange={this.handleInputData}
                            />
                            {
                               this.validator.message('userEmail', this.state.userEmail, 'required|email')
                            }
                        </div>
                        <div className="form-group">
                            <input className="form-control" 
                                   type="password"
                                   placeholder="userPassword"
                                   name="userPassword"
                                   value={this.state.userPassword}
                                   onChange={this.handleInputData}
                            />
                            {
                               this.validator.message('userPassword', this.state.userPassword, 'required|min:8')
                            }
                        </div>
    
                        <div className="form-group">
                        <Link to="/register"> NOT A USER! GO TO REGISTER</Link>
                        </div>
                            

                        <button 
                                type="submit"  
                                className="btn btn-primary"
                               // onClick={()=>this.ShowCart()}
                        >Submit</button>
                    </form>
                      
                    </div>
                </div>
            </div>

        )
        }
};


const mapStateToProps= (state) => {
    console.log(state);
    return {errorMessage:state.register};
}

export default connect(mapStateToProps,{userLoginAction,ShowUserCartAction})(Login);