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
                    <div className='col-sm-2' style={{ textAlign: 'center' }}>
                        <a href=''><h4>Home</h4></a>
                    </div>
                    <div className='col-sm-2' style={{ textAlign: 'center' }}>
                        <a href=''><h4>What's New</h4></a>
                    </div>
                    <div className='col-sm-2' style={{ textAlign: 'center' }}>
                        <a href=''><h4>Products</h4></a>
                    </div>
                    <div className='col-sm-2' style={{ textAlign: 'center' }}>
                        <a href=''><h4>About</h4></a>
                    </div>
                    <div className='col-sm-2' style={{ textAlign: 'center' }}>
                        <a href=''><h4>Contact</h4></a>
                    </div>
                </div>
                <div>
                    <img class="card-img-top" src="..." alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <footer className='footer'>

                </footer>
            </div>
        )
    }
}
export default Home;
