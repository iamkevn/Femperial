import React, { Component } from 'react'
import {
    Link
  } from 'react-router-dom';
  import './account.scss'

export class Account extends Component {
    render() {
        return (
            <div className="account">
                 <div className="icons">
                    <i className="fab fa-youtube animate__animated animate__fadeInLeft"></i>
                    <i className="fab fa-instagram animate__animated animate__fadeInLeft"></i>
                    <i className="fab fa-facebook-f animate__animated animate__fadeInLeft"></i>
                    <i className="fab fa-twitter animate__animated animate__fadeInLeft"></i>
                    <i class="fas fa-envelope animate__animated animate__fadeInLeft"></i>
                </div>
                <header>
                    <nav>
                        <ul>
                            <li>
                            <Link to="/account"><i class="fas fa-user animate__animated animate__fadeInDown"></i></Link>
                            </li>
                            <li>
                            <Link to="/shop"><i class="fas fa-store-alt animate__animated animate__fadeInDown"></i></Link>
                            </li>
                            <li>
                            <Link to="/bag"><i class="fas fa-shopping-bag animate__animated animate__fadeInDown"></i></Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Link to="/"><h1>FEMPERIAL</h1></Link>
                <Link to="/"><h2>COSMETICS</h2></Link>
          
                <form>
                    <h3>Create an Account</h3>
                <div className="name">
                   <input 
                        placeholder="First Name"
                        name="first-name" 
                    />
                   <input 
                        placeholder="Last Name"
                        name="last-name" 
                    />
                </div>
                   <input 
                        placeholder="Address"
                        name="address" 
                    />
                   <input 
                        placeholder="Email"
                        name="email" 
                    />
                   <input 
                        placeholder="Password"
                        name="password" 
                        type="password"
                    />
                    <button><Link to="/">Create Account</Link></button>
                    <div><Link to="/account/login">Already have an account? Login</Link></div>
                </form>
                
           
            </div>
        )
    }
}

export default Account
