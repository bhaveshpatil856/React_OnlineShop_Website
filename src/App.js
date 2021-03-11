import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import NavigationBar from './components/navBar'
import ProductDetails from "./components/productDetails";
import Register from "./components/register";
import Cart from "./components/cart"
import PrivateRoute from "./shared/helper/private.route";

class App extends Component{
render(){
    return (
    <React.Fragment>
        <NavigationBar/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/Login" exact component={Login }/>
        <Route path="/register" exact component={Register}/>
        <Route path='/findProductById/:id' exact component={ProductDetails}/>
        <PrivateRoute path="/cart" exact component={Cart}/>

        </Switch>
    </React.Fragment>
    )
}
}

export default App;