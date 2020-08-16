import React, {Component} from 'react';
import Products from './components/Products';
import './App.css';
import Basket from './components/Basket';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filteredProducts: [], cartItems:[]};
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
      <h1>Femperial</h1>
      <div className="row">
        <div className="col-md-8">
          
          <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart}/>
        </div>
        <div className="col-md-4">
          <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart}/>
        </div>
      </div>
    </div>
    )
  }
}

export default App
