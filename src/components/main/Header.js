import React, { Component } from 'react'
import CartIcon from '../main/shopping-cart-solid.svg'
import {Link} from 'react-router-dom'
import '../css/Header.css'
import {DataContext} from '../main/Context'



export class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }
    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

    handleClick=() =>{
        window.location.href="/shopping-cart-react";
    }
    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
        return (
            <header>
                <div className="logo">
                    <h1><Link to="/">Book management System</Link></h1>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/books">Books</Link></li>
                         <li><Link to="/logout" onClick={this.handleClick} >LogOut</Link></li> 
                    </ul>
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={CartIcon} alt="" width="20"/>
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header
