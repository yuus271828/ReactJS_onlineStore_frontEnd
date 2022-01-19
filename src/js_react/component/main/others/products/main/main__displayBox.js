import React from 'react';

function Main__displayBox(props){
  return(
    <div className='main__displayBox'>
      <a className='displayBOX__imgBox' href={props.href}>
        <img className='displayBOX__img' src={props.img}></img>
        <div className='displayBox__number'>{props.number} 項商品</div>
        <div className='displayBox__discount'>
          <div>{props.discount}</div>
        </div>
      </a>
      <div className='displayBox__name' href={props.href}>{props.name}</div>
      <a className='displayBox__shoppingCart'>快速下單</a>
    </div>
  )
}

export default Main__displayBox;