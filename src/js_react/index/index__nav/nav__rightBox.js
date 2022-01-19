import React from 'react';

export default function Nav__rightBox(props){
  return (
    <div className='index__nav__rightBox'>
      <a title='商品搜尋' className='icofont-search index__rightBox__icon'></a>
      <a title='常見問題' className='icofont-question-circle index__rightBox__icon' href='/contents/instruction'></a>
      <a title='語言設定' className='index__rightBox__icon'>語言</a>
      <a title='會員登入' className='icofont-user-alt-3 index__rightBox__icon' href='/contents/login'></a>
      <a title='購物清單' className='icofont-shopping-cart index__rightBox__icon'></a>
      <a title='主選單' onClick={(e) => props.click(e)} id='index__nav__rightBox__menu' className='index__rightBox__icon'>☰</a>
    </div>
  )
}
