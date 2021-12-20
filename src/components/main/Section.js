import React, { Component } from 'react'
import Books from '../section/Books'
import Details from '../section/Details'
import {Route} from "react-router-dom"
import Cart from '../section/Cart'
import Home from '../section/Home'
import Login from '../login/Login'


export class Section extends Component {
    state={
        isLog:false
      }
    
      handleLogin = (isLog) => this.setState({isLog})
      render(){
        const {isLog} = this.state;
        return (
            
            <section>
            
                     <Route path="/home" component={Home} exact /> 
                    <Route path="/books" component={Books} exact  />
                    <Route path="/product/:id" component={Details} exact />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/logout" component={Login}  exact/>
                    {
            !isLog ?
            <Route exact path='/shopping-cart-react' render={() => <Login isLogin={this.handleLogin}/> }/>
              :
            <Route path='/home' render={() =><Home handleLogged={this.handleLogin}/> }/>
          }
            </section>
        )
    }
}
export default Section
