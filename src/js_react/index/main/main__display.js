import React from 'react';

export default function DisplayBox() {
  return (
    <div className='index__main__display'>
      {/* =TITLE */}
      <div className='index__main__displayTitle'>系列產品</div>
      {/* =BOX__LARGE */}
      <div className='index__main__displayBox'>
        <div className='index__displayProduct'>
          <div className='index__displayProduct__keyWord'>烏</div>
          <div className='index__displayProduct__name'>
            &nbsp;&nbsp;烏魚子<br></br>&nbsp;&nbsp;&nbsp;【禮盒系列】
          </div>
          <a className='index__displayProduct__link' >MORE</a>
        </div>
        {/* 400*541/826*455/465*636 */}
        <picture>
        <source media='(min-width: 1000px)' srcSet='/static/index_main_display_1_1000px.jpg'/>
          <source media='(min-width: 480px)' srcSet='/static/index_main_display_1_480px.jpg'/>
          <img src='/static/index_main_display_1.jpg' alt='烏魚子禮盒'/>
        </picture>
      </div>
      {/* =CONTAINER */}
      <div className='index__main__displayContainer'>
        {/* =BOX__MIDDLE */}
        <div className='index__main__displayBox displayBox--middle'>
          <div className='index__displayProduct'>
            <div className='index__displayProduct__keyWord'>烏</div>
            <div className='index__displayProduct__name'>
              &nbsp;&nbsp;烏魚子<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;禮盒
            </div>
            <a className='index__displayProduct__link' >MORE</a>
          </div>
          {/* 400*271/465*313/465*313 */}
          <picture>
            <source media='(min-width: 480px)' srcSet='/static/index_main_display_2_480px.jpg'/>
            <img src='/static/index_main_display_2.jpg' alt='烏魚子禮盒'/>
          </picture>
        </div>
        <div className='index__main__displayBox displayBox--middle'>
          <div className='index__displayProduct'>
            <div className='index__displayProduct__keyWord'>烏</div>
            <div className='index__displayProduct__name'>
              &nbsp;&nbsp;烏魚子<br></br>&nbsp;&nbsp;&nbsp;&nbsp;一口吃
            </div>
            <a className='index__displayProduct__link' >MORE</a>
          </div>
          <picture>
            <source media='(min-width: 480px)' srcSet='/static/index_main_display_3_480px.jpg'/>
            <img src='/static/index_main_display_3.jpg' alt='烏魚子一口吃'/>
          </picture>
        </div>
        {/* =BOX__SMALL */}
        <div className='index__main__displayBox displayBox--small'>
          <div className='index__displayProduct'>
            <div className='index__displayProduct__keyWord'>烏</div>
            <div className='index__displayProduct__name'>
              烏魚子一口吃
            </div>
            <a className='index__displayProduct__link' >MORE</a>
          </div>
          {/* 400*271/200*200/200*200 */}
          <picture>
            <source media='(min-width: 480px)' srcSet='/static/index_main_display_4_480px.jpg'/>
            <img src='/static/index_main_display_4.jpg' alt='烏魚子一口吃'/>
          </picture>
        </div>
        <div className='index__main__displayBox displayBox--small'>
          <div className='index__displayProduct'>
            <div className='index__displayProduct__keyWord'>烏</div>
            <div className='index__displayProduct__name'>
            烏魚子一口吃
            </div>
            <a className='index__displayProduct__link' >MORE</a>
          </div>
          <picture>
            <source media='(min-width: 480px)' srcSet='/static/index_main_display_5_480px.jpg'/>
            <img src='/static/index_main_display_5.jpg' alt='烏魚子一口吃'/>
          </picture>
        </div>
        <div className='index__main__displayBox displayBox--small'>
          <div className='index__displayProduct'>
            <div className='index__displayProduct__keyWord'>腱</div>
            <div className='index__displayProduct__name'>
            烏魚腱
            </div>
            <a className='index__displayProduct__link' >MORE</a>
          </div>
          <picture>
            <source media='(min-width: 480px)' srcSet='/static/index_main_display_6_480px.jpg'/>
            <img src='/static/index_main_display_6.jpg' alt='烏魚腱'/>
          </picture>
        </div>
      </div>
    </div>
  )
}
