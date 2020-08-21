import React, { Component } from 'react'
import util from '../util';
import { Link } from 'react-router-dom';
import './basket.scss';

export class Basket extends Component {
    render() {

        const { cartItems } = this.props;
        console.log(cartItems.length);
        return (
            <div className="basket">
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
                               {cartItems.length === 0 ? '' : <span>({cartItems.length})</span>}
                            </li>
                        </ul>
                    </nav>
                </header>
                <Link to="/"><h1>FEMPERIAL</h1></Link>
                <Link to="/"><h2>COSMETICS</h2></Link>
                <div className="bag">
                <div className="top">
                    <h3>Shopping Bag</h3>
                    {cartItems.length === 0 ? <span>Empty</span> : <span> {cartItems.length} items</span>}
                </div>
                {cartItems.length > 0 &&
                    <div>
                        <ul>
                            {cartItems.map(item =>
                                <li className="animate__animated animate__fadeInRight">
                                    <img src={`${item.image}`} alt={item.description} ></img>
                                    <div className="title">
                                        <h4>{item.title}</h4>
                                        <div>{item.description}</div>
                                    </div>

                                    <div>Qty: {item.count / 2}</div>

                                    <div>Price: ${item.price * item.count / 2}</div>

                                    <button
                                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}>
                                        REMOVE
                                </button>
                                </li>
                            )}
                        </ul>
                        <div className="checkout">
                            <div>Total: {util.formatCurrency(cartItems.reduce((a, c) => a + c.price * (c.count / 2), 0))}</div>
                            <br></br>
                            <button className="green">ORDER</button>
                        </div>
                    </div>
                }
                </div>
            </div>
        )
    }
}

export default Basket
