import React from 'react';

export default function Nav_Index__rightBox(props){
  return (
    <div className='nav_index__rightBox'>
      <a title='商品搜尋' className='icofont-search nav_index__rightBoxIcon'></a>
      <a title='常見問題' className='icofont-question-circle nav_index__rightBoxIcon' href='/contents/instruction'></a>
      <a title='語言設定' className='nav_index__rightBoxIcon'>語言</a>
      <a title='會員登入' className='icofont-user-alt-3 nav_index__rightBoxIcon' href='/contents/login'></a>
      <a title='購物清單' className='icofont-shopping-cart nav_index__rightBoxIcon'></a>
      <a title='主選單' onClick={(e) => props.click(e)} id='nav_index__rightBoxMenu' className='nav_index__rightBoxIcon'>☰</a>
    </div>
  )
}
