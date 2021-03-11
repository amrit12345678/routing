import React, { Component } from 'react';
import './App.css';
import Logo from './images/cauli.jpg';

class Cart extends Component {
    render() {
        return (
            <div>
                <div className='images'>
                    <a href='/home'><img className='logo' src={Logo} /></a>
                </div>
                <footer className='footer'>

                </footer>
            </div>
        )
    }
}
export default Cart;
