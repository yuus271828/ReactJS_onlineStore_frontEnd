import React from "react";

export default class Main__priceBox extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <form className='productBox__priceBox'>
        <div className='priceBox__price'>NT${this.props.productID.price}&nbsp;/&nbsp;1片</div>
        <div className='priceBox__quantityBox'>
          <a onClick={() => this.props.stepDown()} className='quantityBox__operator'>-</a>
          <input onInput={(e) => this.props.onInputHandler(e)} type='text' pattern='[0-9]*' className='quantityBox__number' name='quantity' value={this.props.productID.quantity} />
          <a onClick={() => this.props.stepUp()} className='quantityBox__operator quantityBox__operator--plus'>+</a>
        </div>
        <div className='priceBox__sum'>NT${this.props.productID.sum}</div>
        <button onClick={(e) => this.props.addToShoppingCart(e)} type='submit' className='productBox__shoppingCart'>加入購物車</button>
      </form>
    )
  }
}
