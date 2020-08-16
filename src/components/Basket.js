import React, { Component } from 'react'
import util from '../util';

export class Basket extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div className="alert alert-info">
                {cartItems.length === 0 ? ' Basket is empty' : <div> You have {cartItems.length} products in the basket.</div>}
                {cartItems.length > 0 &&
                <div>
                    <ul>
                        {cartItems.map(item =>
                            <li>
                                <b>{item.title}</b>
                                 {item.count / 2} = {item.price * item.count / 2}
                                <button
                                onClick={(e) => this.props.handleRemoveFromCart(e, item)}>
                                    X
                                </button>
                            </li>
                        )}
                    </ul>
                    Total: {util.formatCurrency(cartItems.reduce((a, c) => a + c.price * (c.count / 2), 0))}
                    <br></br>
                    <button>checkout</button>
                </div>
                }
            
            </div>
        )
    }
}

export default Basket
