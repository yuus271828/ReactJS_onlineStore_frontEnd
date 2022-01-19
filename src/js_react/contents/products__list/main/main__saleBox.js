import React from 'react';

function Main__saleBox(props){
  return(
    <div className='main__saleBox'>
      <a className='saleBOX__imgBox' href={props.href}>
        {/* 可以用滑的切換圖片 */}
        <img className='saleBOX__img' src={props.img}></img>
        <div className='saleBox__discount'>
          <div>{props.discount}</div>
        </div>
      </a>
      <div className='saleBox__name' href={props.href}>{props.name}</div>
      <div className='saleBox__price'>{props.price}</div>
      <a className='saleBox__shoppingCart'>加入購物車</a>
    </div>
  )
}

export default Main__saleBox;