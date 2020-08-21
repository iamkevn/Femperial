import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './home.scss'

const img = require('../images/brushe.jpg');
    const divStyle = {
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover'  
      };

export class Home extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div className="home" style={divStyle}>
                <div className="icons">
                    <i className="fab fa-youtube animate__animated animate__fadeInLeft"></i>
                    <i className="fab fa-instagram animate__animated animate__fadeInLeft"></i>
                    <i className="fab fa-facebook-f animate__animated animate__fadeInLeft"></i>
                    <i className="fab fa-twitter animate__animated animate__fadeInLeft"></i>
                    <i className="fas fa-envelope animate__animated animate__fadeInLeft"></i>
                </div>
                <nav>
                       <ul>
                            <li>
                            <Link to="/account"><i className="fas fa-user animate__animated animate__fadeInDown"></i></Link>
                            </li>
                            <li>
                            <Link to="/shop"><i className="fas fa-store-alt animate__animated animate__fadeInDown"></i></Link>
                            </li>
                            <li>
                            <Link to="/bag"><i className="fas fa-shopping-bag animate__animated animate__fadeInDown"></i></Link>
                               {cartItems.length === 0 ? '' : <span>({cartItems.length})</span>}
                            </li>
                       </ul>
                   </nav>
                  
                   <Link to="/"><h1>FEMPERIAL</h1></Link>
                   <Link to="/"><h2>COSMETICS</h2></Link>
                   
                   <Link to="/shop"><button className="animate__animated animate__pulse"><span>SHOP</span></button></Link>
        
            </div>
        )
    }
}

export default Home
