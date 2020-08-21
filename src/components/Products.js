import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import util from '../util';
import './products.scss';

export class Products extends Component {
    render() {
        const {cartItems} = this.props;
        const productsItems = this.props.products.map(product => (
            <div className="product animate__animated animate__fadeInUp" key={product.id}>
                <div>
                    <div onClick={(e) => this.props.handleAddToCart(e, product)}>
                        <img src={`${product.image}`}  alt={product.title}></img>
                        <h3>
                            {product.title}
                        </h3>
                        <p>
                            {product.description}
                        </p>
                    </div>
                    <div>
                        <p><b>{util.formatCurrency(product.price)}</b></p>
                        <button 
                        onClick={(e) => this.props.handleAddToCart(e, product)}>
                            Add To Bag
                        </button>
                    </div>
                </div>
            </div>
        )
        )
        return (
            <div className="shop">
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
                </header>
                <Link to="/"><h1>FEMPERIAL</h1></Link>
                <Link to="/"><h2>COSMETICS</h2></Link> 
            <div className="products">
                {productsItems}
            </div>
            </div>
        )
    }
}

export default Products



