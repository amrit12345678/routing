import React, { Component } from 'react';
import './App.css';
import Logo from './images/cauli.jpg';
import Tomato from './images/tomato.jpg';
import Cauli from './images/cauli1.jpg';
import Cabbage from './images/cabbage.jpg';
import Eggplant from './images/eggplant.jpg';
import Peas from './images/peas.jpg';
import Spinach from './images/spinach.jpg';
import { FiShoppingCart } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';


class Home extends Component {
    render() { 
        return (

            <div className='page'>
                <div className='row images'>
                    <div className='logo2 col-sm-4'>
                        <img className='logo' src={Logo} />
                    </div>
                    <div class="input-group col-sm-4" style={{paddingTop: '23px', justifyContent: 'center'}}>
                        <div class="form-outline" style={{width:'350px'}}>
                            <input type="search" id="form1" class="form-control" placeholder='Search'/>
                            <label class="form-label" for="form1" />
                        </div>
                        <button type="button" class="btn btn-secondary" style={{height: '38px', width:'50px'}}>
                            <i class="fas fa-search"><FiSearch/></i>
                        </button>
                    </div>
                    <div className='homebtn col-sm-4'>
                        <a href='./'> <button className='button btn-dark'>Login</button></a>
                        <a href='./registration'><button className='button btn-outline-dark' style={{}}>Registration</button></a>
                        <a href='./cart'><button className='button btn-dark'><FiShoppingCart /></button></a>
                    </div>
                </div>
                <div className='gradiant'>
                    <div className='row NavBar' style={{ justifyContent: 'center', paddingTop: '20px', height: '0px' }}>
                        <div className='col-sm-2 navicon' style={{ textAlign: 'center' }}>
                            <a href=''><h4>Home</h4></a>
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
                    <div className='row'>
                        <div class="card crds" style={{ width: '18rem' }}>
                            <img class="card-img-top" src={Cauli} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Cauli</h5>
                                <p class="card-text">Fresh Food</p>
                                <a href="#" class="btn btn-primary">View Product</a>
                            </div>
                        </div>
                        <div class="card crds" style={{ width: '18rem' }}>
                            <img class="card-img-top" src={Tomato} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Tomato</h5>
                                <p class="card-text">Fresh Food</p>
                                <a href="#" class="btn btn-primary">View Product</a>
                            </div>
                        </div>
                        <div class="card crds" style={{ width: '18rem' }}>
                            <img class="card-img-top" src={Spinach} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Spinach</h5>
                                <p class="card-text">Fresh Food</p>
                                <a href="#" class="btn btn-primary">View Product</a>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="card crds" style={{ width: '18rem' }}>
                            <img class="card-img-top" src={Eggplant} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Egg Plant</h5>
                                <p class="card-text">Fresh Food</p>
                                <a href="#" class="btn btn-primary">View Product</a>
                            </div>
                        </div>
                        <div class="card crds" style={{ width: '18rem' }}>
                            <img class="card-img-top" src={Cabbage} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Cabbage</h5>
                                <p class="card-text">Fresh Food</p>
                                <a href="#" class="btn btn-primary">View Product</a>
                            </div>
                        </div>
                        <div class="card crds" style={{ width: '18rem' }}>
                            <img class="card-img-top" src={Peas} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Peas</h5>
                                <p class="card-text">Fresh Food</p>
                                <a href="#" class="btn btn-primary">View Product</a>
                            </div>
                        </div>
                    </div>

                    <footer className='footer'>

                    </footer>
                </div>

            </div>
        )
    }
}
export default Home;
