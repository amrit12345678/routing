import React, { Component } from 'react';
import './App.css';
import Logo from './images/cauli.jpg';

class Home extends Component {
    render() {
        return (

            <div className='page'>
                <div className='row images'>
                    <div className='logo2 col-sm-9'>
                        <img className='logo' src={Logo} />
                    </div>
                    <div className='homebtn col-sm-3'>
                        <a href='./'> <button className='button btn-secondary'>Login</button></a>
                        <a href='./registration'><button className='button btn-secondary'>Registration</button></a>
                        <button className='button btn-secondary'>Add to Cart</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2' style={{textAlign:'center'}}>
                        <a href=''><h3>Home</h3></a>

                    </div>
                </div>
                <footer className='footer'>

                </footer>
            </div>
        )
    }
}
export default Home;
