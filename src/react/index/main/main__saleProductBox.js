import React from 'react';

export default function SaleProductBox(props){
  return (
    <div className='main__saleProductBox'>
      <picture>
        <img src={props.img} alt={props.alt} />
      </picture>
      <div className='saleProduct'>
        <div className='saleProduct__name'>&nbsp;&nbsp;{props.name}</div>
        <div className='saleProduct__price'>{props.price}</div>
        <button type='submit' className='saleProduct__shoppingCart'>加入購物車</button>
      </div>
    </div>
  )
}
