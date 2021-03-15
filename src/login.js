import React, { Component } from 'react';
import './App.css';
import Logo from './images/cauli.jpg';

class Login extends Component {
    render() {
        return (
            <div className='hello'>
                <div className='images'>
                    <a href='/home'><img className='logo' src={Logo} /></a>
                </div>
                <div className='forcard' style={{ paddingLeft: '650px' }}>
                    <div className="card" style={{ width: '25rem', borderRadius: '30px' }}>
                        <div className="card-body">
                            <h1 className="loginregister">Login Below</h1>
                            <input
                                className='field'
                                type='username'
                                placeholder='Username'
                                required
                            />
                            <br />
                            <input
                                className='field'
                                type='password'
                                placeholder='Password'
                                required
                            />
                            <br />
                            <a href='/home'> <button className='button btn-secondary' onClick='requierd'>Login</button></a>
                            <a href='/registration'><button className='button btn-secondary'>Sign Up</button></a>
                        </div>
                    </div>
                </div>
                <footer className='footer'>

                </footer>
            </div>
        )
    }
}
export default Login;
