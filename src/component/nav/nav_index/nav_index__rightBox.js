import React from 'react';

export default function NAV_INDEX__RIGHTBOX(props){
  const preventJump = (e) => {
    e.preventDefault();
  }
  return (
    <div className='nav_index__rightBox'>
      <a href='###' onClick={preventJump} title='商品搜尋' className='icofont-search nav_index__rightBoxIcon'> </a>
      <a href='###' onClick={preventJump} title='常見問題' className='icofont-question-circle nav_index__rightBoxIcon'> </a>
      <a href='###' onClick={preventJump} title='語言設定' className='nav_index__rightBoxIcon'>語言</a>
      <a href='/contents/login' title='會員登入' className='icofont-user-alt-3 nav_index__rightBoxIcon'> </a>
      <a href='###' onClick={preventJump} title='購物清單' className='icofont-shopping-cart nav_index__rightBoxIcon'> </a>
      <a href='###' onClick={(e) => props.click(e)} title='主選單' id='nav_index__rightBoxMenu' className='nav_index__rightBoxIcon'>☰</a>
    </div>
  )
}
