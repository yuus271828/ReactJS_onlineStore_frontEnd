import React, { useState, useEffect } from 'react';
import MAIN_SALEBOX__PRODUCT from './main_saleBox__product';

export default function MAIN_SALEBOX() {
  const [windowX, setWindowX] = useState(0);
  const [container__maximum, setContainer__maximum] = useState(1);
  // position 的最大範圍為:-3~0
  const [position, setPosition] = useState(0);
  const products = document.getElementsByClassName('main_saleBox__product');
  const maxSteps = products.length - container__maximum;

  // 檢查視窗寬度，設定最大欄位數。並監視視窗寬度變化事件，在變化時，重置欄位位置。
  useEffect(()=>{
    const products = document.getElementsByClassName('main_saleBox__product');
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
    resize__eventHandler();
    window.addEventListener('resize', resize__eventHandler);
    return () => window.removeEventListener('resize', resize__eventHandler);
  },[windowX])

  // 點擊觸發欄位移動
  const arrow__clickHandler = (e) => {
    e.preventDefault();
    // 左箭頭
    if (e.target.id === 'main_saleBox__leftArrow') {
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
    if (e.target.id === 'main_saleBox__rightArrow'){
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
    <div className='main_saleBox'>
      <div className='main_saleBoxBackground'>
        <div className='main_saleBoxTitle'>熱賣推薦</div>
        <div className='main_saleBox__arrowBox'>
          <a href='###' onClick={(e) => arrow__clickHandler(e)} id='main_saleBox__leftArrow' className='icofont-simple-left main_saleBox__Arrow'> </a>
          <a href='###' onClick={(e) => arrow__clickHandler(e)} id='main_saleBox__rightArrow' className='icofont-simple-right main_saleBox__Arrow main_saleBox__Arrow--right'> </a>
        </div>
      </div>
      <div className='main_saleBoxContainer'>
        <MAIN_SALEBOX__PRODUCT name='烏魚子禮盒' price='NT$100' img='/static/main_saleBox_1.jpg' alt='烏魚子禮盒' />
        <MAIN_SALEBOX__PRODUCT name='烏魚子禮盒' price='NT$100' img='/static/main_saleBox_2.jpg' alt='烏魚子禮盒' />
        <MAIN_SALEBOX__PRODUCT name='烏魚子一口吃' price='NT$100' img='/static/main_saleBox_3.jpg' alt='烏魚子一口吃' />
        <MAIN_SALEBOX__PRODUCT name='烏魚子一口吃' price='NT$100' img='/static/main_saleBox_4.jpg' alt='烏魚子一口吃' />
        <MAIN_SALEBOX__PRODUCT name='烏魚子一口吃' price='NT$100' img='/static/main_saleBox_5.jpg' alt='烏魚子一口吃' />
        <MAIN_SALEBOX__PRODUCT name='烏魚腱' price='NT$100' img='/static/main_saleBox_6.jpg' alt='烏魚腱' />
      </div>
    </div>
  )
}

