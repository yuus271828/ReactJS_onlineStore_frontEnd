import React from 'react';

export default function NAV__RIGHTBOX(props){
  const preventJump = (e) => {
    e.preventDefault();
  }
  return (
    <div className='nav__rightBox'>
      <a href='###' onClick={preventJump} title='商品搜尋' className='icofont-search nav__rightBoxIcon'> </a>
      <a href='###' onClick={preventJump} title='常見問題' className='icofont-question-circle nav__rightBoxIcon'> </a>
      <a href='###' onClick={preventJump} title='語言設定' className='nav__rightBoxIcon'>語言</a>
      <a href='/contents/login' title='會員登入' className='icofont-user-alt-3 nav__rightBoxIcon'> </a>
      <a href='###' onClick={preventJump} title='購物清單' className='icofont-shopping-cart nav__rightBoxIcon'> </a>
      <a href='###' onClick={(e) => props.click(e)} title='主選單' id='nav__rightBoxMenu' className='nav__rightBoxIcon'>☰</a>
    </div>
  )
}
