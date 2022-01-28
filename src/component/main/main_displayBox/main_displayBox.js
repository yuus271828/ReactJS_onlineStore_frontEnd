import React from 'react';

export default function MAIN_DISPLAYBOX() {
  const preventJump = (e) => {
    e.preventDefault();
  }
  return (
    <div className='main__display'>
      {/* =TITLE */}
      <div className='main__displayTitle'>系列產品</div>
      {/* =BOX__LARGE */}
      <div className='main__displayBox'>
        <div className='main__displayProduct'>
          <div className='main__displayProduct__keyWord'>烏</div>
          <div className='main__displayProduct__name'>
            &nbsp;&nbsp;烏魚子<br></br>&nbsp;&nbsp;&nbsp;【禮盒系列】
          </div>
          <a href='###' onClick={preventJump} className='main__displayProduct__link' >MORE</a>
        </div>
        <picture>
        <source media='(min-width: 1000px)' srcSet='/static/main_displayBox_1_1000px.jpg'/>
          <source media='(min-width: 480px)' srcSet='/static/main_displayBox_1_480px.jpg'/>
          <img src='/static/main_displayBox_1.jpg' alt='烏魚子禮盒'/>
        </picture>
      </div>
      {/* =CONTAINER */}
      <div className='main__displayContainer'>
        {/* =BOX__MIDDLE */}
        <div className='main__displayBox main__displayBox--middle'>
          <div className='main__displayProduct'>
            <div className='main__displayProduct__keyWord'>烏</div>
            <div className='main__displayProduct__name'>
              &nbsp;&nbsp;烏魚子<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;禮盒
            </div>
            <a href='###' onClick={preventJump} className='main__displayProduct__link' >MORE</a>
          </div>
          <picture>
            <source media='(min-width: 480px)' srcSet='/static/main_displayBox_2_480px.jpg'/>
            <img src='/static/main_displayBox_2.jpg' alt='烏魚子禮盒'/>
          </picture>
        </div>
        <div className='main__displayBox main__displayBox--middle'>
          <div className='main__displayProduct'>
            <div className='main__displayProduct__keyWord'>烏</div>
            <div className='main__displayProduct__name'>
              &nbsp;&nbsp;烏魚子<br></br>&nbsp;&nbsp;&nbsp;&nbsp;一口吃
            </div>
            <a href='###' onClick={preventJump} className='main__displayProduct__link' >MORE</a>
          </div>
          <picture>
            <source media='(min-width: 480px)' srcSet='/static/main_displayBox_3_480px.jpg'/>
            <img src='/static/main_displayBox_3.jpg' alt='烏魚子一口吃'/>
          </picture>
        </div>
        {/* =BOX__SMALL */}
        <div className='main__displayBox main__displayBox--small'>
          <div className='main__displayProduct'>
            <div className='main__displayProduct__keyWord'>烏</div>
            <div className='main__displayProduct__name'>
              烏魚子一口吃
            </div>
            <a href='###' onClick={preventJump} className='main__displayProduct__link' >MORE</a>
          </div>
          <picture>
            <source media='(min-width: 480px)' srcSet='/static/main_displayBox_4_480px.jpg'/>
            <img src='/static/main_displayBox_4.jpg' alt='烏魚子一口吃'/>
          </picture>
        </div>
        <div className='main__displayBox main__displayBox--small'>
          <div className='main__displayProduct'>
            <div className='main__displayProduct__keyWord'>烏</div>
            <div className='main__displayProduct__name'>
            烏魚子一口吃
            </div>
            <a href='###' onClick={preventJump} className='main__displayProduct__link' >MORE</a>
          </div>
          <picture>
            <source media='(min-width: 480px)' srcSet='/static/main_displayBox_5_480px.jpg'/>
            <img src='/static/main_displayBox_5.jpg' alt='烏魚子一口吃'/>
          </picture>
        </div>
        <div className='main__displayBox main__displayBox--small'>
          <div className='main__displayProduct'>
            <div className='main__displayProduct__keyWord'>腱</div>
            <div className='main__displayProduct__name'>
            烏魚腱
            </div>
            <a href='###' onClick={preventJump} className='main__displayProduct__link' >MORE</a>
          </div>
          <picture>
            <source media='(min-width: 480px)' srcSet='/static/main_displayBox_6_480px.jpg'/>
            <img src='/static/main_displayBox_6.jpg' alt='烏魚腱'/>
          </picture>
        </div>
      </div>
    </div>
  )
}
