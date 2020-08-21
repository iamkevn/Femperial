import React, {Component} from 'react';
import Products from './components/Products';
import './App.css';
import Basket from './components/Basket';
import Home from './components/Home';
import Account from './components/Account';
import Login from './components/Login';
import Order from './components/Order';

import { Route, Switch } from 'react-router-dom';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], cartItems:[]};
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
}
  componentDidMount() {
    fetch("http://localhost:8000/products").then(res => res.json())
    .then(data => this.setState({
      products: data,
      filteredProducts: data
    }));
    if(localStorage.getItem('cartItems')) {
      this.setState({cartItems: JSON.parse(localStorage.getItem('cartItems'))})
    }
  }
  handleAddToCart(e, product) {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach(item => {
        if(item.id === product.id) {
          productAlreadyInCart = true;
          item.count++;
        }
      });
      if(!productAlreadyInCart) {
        cartItems.push({...product, count:1});
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    });
    
  }

  handleRemoveFromCart(e, item) {
    this.setState(state => {
      const cartItems = state.cartItems.filter(elm => elm.id !== item.id)
      localStorage.setItem('cartItems', cartItems);
      return {cartItems};
    });
  }

  render() {
    return (
      <div className="container">
      
          <Switch>
          <Route exact path="/shop" render={() => {
          return <Products cartItems={this.state.cartItems} products={this.state.products} handleAddToCart={this.handleAddToCart} /> 
          }} />
         <Route exact path="/bag" render={() => {
          return <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart}/>
          }} />
         <Route exact path="/order" render={() => {
          return <Order cartItems={this.state.cartItems}/>
          }} />
         <Route exact path="/" render={() => {
          return <Home cartItems={this.state.cartItems} />
          }} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/account/login" component={Login} />
          </Switch>
      </div>
    )
  }
}

export default App
