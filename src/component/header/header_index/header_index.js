import React, { useEffect } from 'react';

export default function HEADER_INDEX() {
  useEffect(()=>{
    let timer;
    const headerText__fadeIn = () => {
      let start = Date.now();
      let headerTitle = document.getElementById('header_index__Title');
      let headerDetail = document.getElementById('header_index__Detail');
      headerTitle.style.visibility = 'visible';
      headerDetail.style.visibility = 'visible';
      timer = requestAnimationFrame(function animate(timestamp) {
        let interval = Date.now() - start;
        let timeOutInterval = interval - 2000;
        if (timeOutInterval < 0) timeOutInterval = 0;
        headerTitle.style.opacity = Math.min(timeOutInterval / 1000, 1);
        headerTitle.style.transform = 'translateX(' + Math.max(30 - timeOutInterval / 33.3, 0) + 'px)';
        headerDetail.style.opacity = Math.min(timeOutInterval / 1000, 1);
        headerDetail.style.transform = 'translateX(calc(-50% + ' + Math.max(30 - timeOutInterval / 33.3, 0) + 'px))';
        if (timeOutInterval < 1000) requestAnimationFrame(animate);
      });
    }
    headerText__fadeIn();
    return () => cancelAnimationFrame(timer);
  },[])
  
  return (
    <header className='header_index'>
      <picture>
        <source media='(min-width: 1000px)' srcSet='/static/header_index_1000px.png'/>
        <source media='(min-width: 480px)' srcSet='/static/header_index_480px.png'/>
        <img className='header_index__img' src='/static/header_index.png' alt='茂洋烏魚子'/>
      </picture>
      <div id='header_index__Title' className='header_index__titleBox'>
        <div className='header_index__Title--first'>茂洋</div>
        <div className='header_index__Title--second'>烏魚子</div>
      </div>
      <div id='header_index__Detail' className='header_index__detailBox'>
        <div>五十年傳承養殖經驗與技術</div>
        <div>雲林西海岸自然生態混養</div>
        <div>SGS檢測合格、不含重金屬</div>
      </div>
    </header>
  )
}

