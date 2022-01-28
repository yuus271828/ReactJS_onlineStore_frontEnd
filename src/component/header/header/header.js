import React from 'react';

export default function HEADER(){
  return (
    <div className='header'>
      <img className='header__img' src='/static/header.jpg' alt='茂洋烏魚子'></img>
      <div className='header__titleBox'>
        <div className='headerTitle--first'>茂洋</div>
        <div className='headerTitle--second'>烏魚子</div>
      </div>
      <div className='header__detailBox'>
        <div>五十年傳承養殖經驗與技術</div>
        <div>雲林西海岸自然生態混養</div>
        <div>SGS檢測合格、不含重金屬</div>
      </div>
    </div>
  )
}
