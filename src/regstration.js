import React, { Component } from 'react';
import './App.css'
import Logo from './images/cauli.jpg';
class registration extends Component {
    render() {
        return (
            <div className='hello'>
                <div className='images'>
                    <a href='/home'><img className='logo' src={Logo} /></a>
                </div>
                <div style={{ backgroundImage: '' }} />
                <div style={{ paddingLeft: '650px' }}>
                    <div class="card" style={{ width: '25rem', borderRadius: '30px' }}>
                        <div class="card-body">
                            <h1 class="loginregister">Register Below</h1>
                            <input
                                className='field'
                                type='name'
                                placeholder='Name'
                            />
                            <br />
                            <input
                                className='field'
                                type='email'
                                placeholder='Email'
                            />
                            <br />
                            <input
                                className='field'
                                type='phone'
                                placeholder='Phone'
                            />
                            <br />
                            <input
                                className='field'
                                type='username'
                                placeholder='Username'
                            />
                            <br />
                            <input
                                className='field'
                                type='password'
                                placeholder='Password'
                            />
                            <br />
                            <a href='/'><button className='button btn-secondary'>Register</button></a>
                            <a href='/home'><button className='button btn-secondary'>home</button></a>
                        </div>
                    </div>
                </div>
                <footer className='footer'>

                </footer>

            </div>
        )
    }
}
export default registration;
