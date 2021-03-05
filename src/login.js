import React, { Component } from 'react';
import './App.css'

class Login extends Component {
    render() {
        return (
            <div className='hello'>
                <br />
                <h1>Login Below</h1>
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
                <a href='/registration'>
                    <button className='field'>
                        Login
                    </button>
                 </a>
      </div>
    )
  }
}
export default Login;
