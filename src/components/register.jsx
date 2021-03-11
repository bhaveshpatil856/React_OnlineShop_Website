import React from "react";
import {connect} from "react-redux";
import { Component } from "react";
import {Link} from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import { userRegisterAction } from "../actions/user";

class Register extends Component{

    constructor(){
        super();
        this.state = {
            firstname:"",
            lastname:"",
            userEmail:"",
            userPassword:"",
            address:"",
            termsAcceptCheck:""
        }
        this.validator = new SimpleReactValidator({autoForceUpdate: this});

    }


    HandleFormData = (e) => {
        e.preventDefault();
        if(this.validator.allValid()){
            let item= {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                userLogin: {
                    userEmail: this.state.userEmail,
                    userPassword: this.state.userPassword
                },
                address: this.state.address,
                termsAcceptCheck: this.state.termsAcceptCheck
            };
            let a=this.props.userRegisterAction(item);
            console.log(a);
//            console.log(item); 
            // this.props.UserRegister(item);
        }
        else{
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    handleInputData= (e) => {
        
        this.setState({[e.target.name]: e.target.value});
    }

    handleCheckedBox= (c) => {
       // console.log(c.target.checked);
        this.setState({ [c.target.name] : c.target.checked});
       
    }


    render(){
        // console.log(this.error)
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
                                   type="text"
                                   placeholder="firstname"
                                   name="firstname"
                                   value={this.state.firstname}
                                   onChange={this.handleInputData}
                            />
                            {
                               this.validator.message('firstname', this.state.firstname, 'required|min:4')
                            }
                        </div>
                        <div className="form-group">
                            <input className="form-control" 
                                   type="text"
                                   placeholder="lastname"
                                   name="lastname"
                                   value={this.state.lastname}
                                   onChange={this.handleInputData}
                            />
                           {
                               this.validator.message('lastname', this.state.lastname, 'required|min:4')
                           }
                        </div>
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
                            <textarea className="form-control"
                                    type="text"
                                    placeholder="Address"
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.handleInputData}
                            />
                            {
                               this.validator.message('address', this.state.address, 'required')
                            }
                        </div>

                        <div className="form-check" style={{marginBottom:'20px'}}>
                            <input type="checkbox" 
                                className="form-check-input"
                                id="exampleCheck1"
                                // checked="this.state.handleCheckedBox"
                                name="termsAcceptCheck"
                                onChange={this.handleCheckedBox}
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">Accept Terms And Conditions</label>
                            {
                               this.validator.message('termsAcceptCheck', this.state.termsAcceptCheck, 'required|boolean')
                           }
                        </div>
                        
                        
                        <div className="form-group">
                        <Link to="/Login"> ALREADY A USER! GO TO LOGIN</Link>
                        </div>


                        <button type="submit" className="btn btn-primary">Submit</button>
                      
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

export default connect(mapStateToProps,{userRegisterAction})(Register); 