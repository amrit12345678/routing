import React, { Component } from 'react';
import './App.css'

class Form extends Component {
    render() {
        return (
            <div className='hello'>
                <h1>Register Below</h1>
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
                <a href='/'>
                    <button className='field'>
                        Register
                     </button>
                </a>
                <br />

            </div>
        )
    }
}
export default Form;
