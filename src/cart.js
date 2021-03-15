import React, { Component } from 'react';
import './App.css';
import Logo from './images/cauli.jpg';
import { FiSearch } from 'react-icons/fi';

class Cart extends Component {
    render() {
        return (
            <div>
                <div className='images'>
                    <a href='/home'><img className='logo' src={Logo} /></a>
                </div>
                <div class="input-group col-sm-4" style={{ paddingTop: '23px', justifyContent: 'left' }}>
                    <div class="form-outline" style={{ width: '200px' }}>
                        <input type="search" id="form1" class="form-control" placeholder='Search' />
                        <label class="form-label" for="form1" />
                    </div>
                    <button type="button" class="btn btn-secondary" style={{ height: '38px', width: '50px' }}>
                        <i class="fas fa-search"><FiSearch /></i>
                    </button>
                </div>
                <div className='row NavBar' style={{ justifyContent: 'center', paddingTop: '20px', height: '0px' }}>
                    <div className='col-sm-2 navicon' style={{ textAlign: 'center' }}>
                        <a href='/home'><h4>Home</h4></a>
                    </div>
                    <div className='col-sm-2 navicon' style={{ textAlign: 'center' }}>
                        <a href=''><h4>What's New</h4></a>
                    </div>
                    <div className='col-sm-2 navicon' style={{ textAlign: 'center' }}>
                        <a href=''><h4>Products</h4></a>
                    </div>
                    <div className='col-sm-2 navicon' style={{ textAlign: 'center' }}>
                        <a href=''><h4>About</h4></a>
                    </div>
                    <div className='col-sm-2 navicon' style={{ textAlign: 'center' }}>
                        <a href=''><h4>Contact</h4></a>
                    </div>
                </div>

                <footer className='footer'>

                </footer>
            </div>
        )
    }
}
export default Cart;
