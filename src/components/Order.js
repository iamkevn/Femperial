import React, { Component } from 'react'
import util from '../util';
import { Link } from 'react-router-dom';
import './order.scss';

export class Order extends Component {
    render() {
        const { cartItems } = this.props;
        return (
            <div className="order">
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

                {cartItems.length > 0 &&
                    <div className="reciept">
                        <h3>ORDER #1948572</h3>
                        <p>Name: Kevin Rodriguez</p>
                        <p>Email: kevin@gmail.com</p>
                        <p>Address: 81 Prospect St, Brooklyn, NY 11201</p>
                        <ol>
                            {cartItems.map(item =>
                                <li>
                                    
                                    <div>
                                        <h4>{item.title}</h4>
                                        <div>{item.description}</div>
                                    </div>
                                </li>
                            )}
                        </ol>
                        <div>
                            <div>Total: {util.formatCurrency(cartItems.reduce((a, c) => a + c.price * (c.count / 2), 0))}</div>                
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Order
