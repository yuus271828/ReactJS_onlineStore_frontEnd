import React from 'react';
import SaleProductBox from './main__saleProductBox';

export default function SaleBox() {
  let preSteps;
  const arrow__clickHandler = (e) => {
    let product = document.getElementsByClassName('main__saleProductBox');
    let windowX = window.innerWidth;
    let container__maximum = 1;
    if (windowX >= 785) container__maximum = 2 ;
    if (windowX >= 1200) container__maximum = 3 ;
    let maxSteps = product.length - container__maximum;
    if (!preSteps) preSteps = 0;
    if (e.target.id !== 'sale__rightArrow' && preSteps <= 0) {
      for (let i=0; i<product.length; i++) {
        product[i].style.transform = 'translateX(calc(' + maxSteps + ' * (-100% - 40px)))';
      }
      preSteps = maxSteps;
    }else if (e.target.id === 'sale__rightArrow' && preSteps >= maxSteps){
      for (let i=0; i<product.length; i++) {
        product[i].style.transform = 'translateX(0px)';
      }
      preSteps = 0;
    }else {
      let oneStep = 1;
      if (e.target.id !== 'sale__rightArrow') oneStep = -1;
      let steps = preSteps + oneStep;
      for (let i=0; i<product.length; i++) {
        product[i].style.transform =  'translateX(calc(' + steps + ' * (-100% - 40px)))';
      }
      preSteps += oneStep;
    }
  }

  return (
    <div className='main__sale'>
      <div className='main__saleBackground'>
        <div className='main__saleTitle'>熱賣推薦</div>
        <div className='main__arrowBox'>
          <a onClick={(e) => arrow__clickHandler(e)} className='icofont-simple-left main__Arrow'></a>
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

