import React, { useEffect } from 'react';

export default function Index__Header() {
  useEffect(()=>{
    let timer;
    const headerText__fadeIn = () => {
      let start = Date.now();
      let headerTitle = document.getElementById('index__headerTitle');
      let headerDetail = document.getElementById('index__headerDetail');
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
  //componentDidMount(){this.headerText__fadeIn();}
  //componentWillUnmount(){cancelAnimationFrame(this.timer);}
  return (
    <header className='index__header'>
      <picture>
        <source media='(min-width: 1000px)' srcSet='/static/index_header_1000px.png'/>
        <source media='(min-width: 480px)' srcSet='/static/index_header_480px.png'/>
        <img className='index__header__img' src='/static/index_header.png' alt='茂洋烏魚子'/>
      </picture>
      <div id='index__headerTitle' className='index__header__titleBox'>
        <div className='index__headerTitle--first'>茂洋</div>
        <div className='index__headerTitle--second'>烏魚子</div>
      </div>
      <div id='index__headerDetail' className='index__header__detailBox'>
        <div>五十年傳承養殖經驗與技術</div>
        <div>雲林西海岸自然生態混養</div>
        <div>SGS檢測合格、不含重金屬</div>
      </div>
    </header>
  )
}

