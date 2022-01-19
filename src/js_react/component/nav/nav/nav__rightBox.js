import React from 'react';

export default function Nav__rightBox(props){
  return (
    <div className='nav__rightBox'>
      <a title='商品搜尋' className='icofont-search nav__rightBoxIcon'></a>
      <a title='常見問題' className='icofont-question-circle nav__rightBoxIcon'></a>
      <a title='語言設定' className='nav__rightBoxIcon'>語言</a>
      <a title='會員登入' className='icofont-user-alt-3 nav__rightBoxIcon' href='/contents/login'></a>
      <a title='購物清單' className='icofont-shopping-cart nav__rightBoxIcon'></a>
      <a title='主選單' onClick={(e) => props.click(e)} id='nav__rightBoxMenu' className='nav__rightBoxIcon'>☰</a>
    </div>
  )
}
