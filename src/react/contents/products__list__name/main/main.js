import React from 'react';
import Main__titleBox from './main__titleBox.js';
import Main__imgBox from './main__imgBox.js';
import Main__priceBox from './main__priceBox.js';

export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      productID: {
        id: 'xxx',
        price: 100,
        quantity: 1,
        sum:null
      }
    }
  }
  sum__calculator = () => {
    this.setState(prevState => {
      let productID = Object.assign({}, prevState.productID);
      productID.sum = productID.price * productID.quantity;
      return {productID};
    });
  }
  onlyNumber = (e) => {
    console.log('x');
    let quantity = (e.target.validity.valid)? parseInt(e.target.value): this.state.productID.quantity;
    if (!quantity) quantity = 0;
    this.setState(prevState => {
      let productID = Object.assign({}, prevState.productID);
      productID.quantity = quantity;
      return {productID};
    })
    this.sum__calculator();
  }
  stepUp = () => {
    this.setState(prevState => {
      let productID = Object.assign({}, prevState.productID);
      productID.quantity += 1;
      return {productID};
    })
    this.sum__calculator();
  }
  stepDown = () => {
    this.setState(prevState => {
      let productID = Object.assign({}, prevState.productID);
      if (productID.quantity === 0) return {productID};
      productID.quantity -= 1;
      return {productID};
    })
    this.sum__calculator();
  }
  addToShoppingCart = (e) => {
    e.preventDefault();
  }
  componentDidMount() {this.sum__calculator();}
  render() {
    return (
      <div className='main'>
        <div className='main__productBox'>
          <Main__titleBox/>
          <Main__imgBox/>
          <Main__priceBox 
            productID={this.state.productID} 
            onInputHandler={this.onlyNumber}
            stepUp={this.stepUp} 
            stepDown={this.stepDown} 
            addToShoppingCart={this.addToShoppingCart} />
        </div>
        <div className='main__productDetails'></div>
      </div>
    )
  }
}
