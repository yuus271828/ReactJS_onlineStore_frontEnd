import React from 'react';

export default function MAIN_SALEBOX__PRODUCT(props){
  return (
    <div className='main_saleBox__product'>
      <picture>
        <img src={props.img} alt={props.alt} />
      </picture>
      <div className='main_saleBox__saleProduct'>
        <div className='main_saleBox__saleProduct__name'>&nbsp;&nbsp;{props.name}</div>
        <div className='main_saleBox__saleProduct__price'>{props.price}</div>
        <button type='submit' className='main_saleBox__saleProduct__shoppingCart'>加入購物車</button>
      </div>
    </div>
  )
}
