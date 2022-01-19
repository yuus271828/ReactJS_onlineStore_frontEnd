import React, { useState, useEffect } from 'react';
import SaleProductBox from './main__saleProductBox';

export default function SaleBox() {
  const [windowX, setWindowX] = useState(0);
  const [container__maximum, setContainer__maximum] = useState(1);
  // position 的最大範圍為:-3~0
  const [position, setPosition] = useState(0);
  const products = document.getElementsByClassName('main__saleProductBox');
  const maxSteps = products.length - container__maximum;

  useEffect(()=>{
    resize__eventHandler();
    window.addEventListener('resize', resize__eventHandler);
    return () => window.removeEventListener('resize', resize__eventHandler);
  },[windowX])

  const resize__eventHandler = () => {
    setWindowX(window.innerWidth);
    setContainer__maximum(1);
    if (windowX >= 785) setContainer__maximum(2);
    if (windowX >= 1200) setContainer__maximum(3);
    // 如果發生 resize，position 和 translateX 就回到 0
    setPosition(0);
    for (let i=0; i<products.length; i++) {
      products[i].style.transform = 'translateX(0px)';
    }
  }  

  const arrow__clickHandler = (e) => {
    // 左箭頭
    if (e.target.id === 'sale__leftArrow') {
      // 從最左移到最右
      if (position >= 0) {
        for (let i=0; i<products.length; i++) {
          products[i].style.transform = 'translateX(calc(' + maxSteps + ' * (-100% - 40px)))';
        }
        setPosition(-maxSteps);
      } else { // 向左移一格
        for (let i=0; i<products.length; i++) {
          products[i].style.transform =  'translateX(calc(' + -(position+1) + ' * (-100% - 40px)))';
        } 
        setPosition(position+1);
      }
    }
    // 右箭頭
    if (e.target.id === 'sale__rightArrow'){
      // 從最右移到最左
      if (position <= -maxSteps) {
        for (let i=0; i<products.length; i++) {
          products[i].style.transform = 'translateX(0px)';
        }
        setPosition(0);
      } else { // 向右移一格
        for (let i=0; i<products.length; i++) {
          products[i].style.transform =  'translateX(calc(' + -(position-1) + ' * (-100% - 40px)))';
        }
        setPosition(position-1);
      }  
    }
  }

  return (
    <div className='main__sale'>
      <div className='main__saleBackground'>
        <div className='main__saleTitle'>熱賣推薦</div>
        <div className='main__arrowBox'>
          <a onClick={(e) => arrow__clickHandler(e)} id='sale__leftArrow' className='icofont-simple-left main__Arrow'></a>
          <a onClick={(e) => arrow__clickHandler(e)} id='sale__rightArrow' className='icofont-simple-right main__Arrow main__Arrow--right'></a>
        </div>
      </div>
      <div className='main__saleContainer'>
        <SaleProductBox name='烏魚子禮盒' price='NT$100' img='/static/index_main_saleProductBox_1.jpg' alt='烏魚子禮盒' />
        <SaleProductBox name='烏魚子禮盒' price='NT$100' img='/static/index_main_saleProductBox_2.jpg' alt='烏魚子禮盒' />
        <SaleProductBox name='烏魚子一口吃' price='NT$100' img='/static/index_main_saleProductBox_3.jpg' alt='烏魚子一口吃' />
        <SaleProductBox name='烏魚子一口吃' price='NT$100' img='/static/index_main_saleProductBox_4.jpg' alt='烏魚子一口吃' />
        <SaleProductBox name='烏魚子一口吃' price='NT$100' img='/static/index_main_saleProductBox_5.jpg' alt='烏魚子一口吃' />
        <SaleProductBox name='烏魚腱' price='NT$100' img='/static/index_main_saleProductBox_6.jpg' alt='烏魚腱' />
      </div>
    </div>
  )
}

