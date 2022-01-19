import React, { useState, useEffect } from 'react';
import Nav__asideBox from './nav__asideBox.js';
import Nav__rightBox from './nav__rightBox.js';
import Nav__centerBox from './nav__centerBox.js';

export default function Nav() {
  const [scrollTop, setScrollTop] = useState(0);
  
  useEffect(()=>{
    let nav = document.getElementsByTagName('nav')[0];
    const nav__scrollHandler = (e) => {
      setScrollTop(e.target.scrollingElement.scrollTop);
      if (e.target.scrollingElement.scrollTop === 0) nav.classList.remove('nav--scroll');
      else nav.classList.add('nav--scroll');
    };
    window.addEventListener('scroll', nav__scrollHandler)
    return () => window.removeEventListener('scroll', nav__scrollHandler)
  },[scrollTop])
  /*
  componentDidMount(){
    window.addEventListener('scroll', e => {this.nav__scrollHandler(e)}, true) 
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', e => {this.nav__scrollHandler(e)}, true)
  }
  */

  const asideBox__clickHandler = (e) => {
    let start = Date.now();
    let nav__menu = document.getElementById('nav__menu');
    if (e.target.id === 'nav__rightBoxMenu') {
      let timerIn = requestAnimationFrame(function animateIn(timestamp) {
        let interval = Date.now() - start;
        nav__menu.style.transform = 'translateX(-' + Math.min(interval, 300) + 'px)';
        if (interval < 300) requestAnimationFrame(animateIn);
        else cancelAnimationFrame(timerIn);
      })
    } else {
      let timerOut = requestAnimationFrame(function animateOut(timestamp) {
        let interval = Date.now() - start;
        nav__menu.style.transform = 'translateX(calc(-300px + ' + Math.min(interval, 300) + 'px))';
        if (interval < 300) requestAnimationFrame(animateOut);
        else cancelAnimationFrame(timerOut);
      })
    }
  }

  return (
    <nav className='nav'>
      <div className='nav__homeLink'>
        <a href='/'>
          <img className='nav__homeLinkImg' src='/static/logo_tr(w)(100x50).svg' alt='茂洋烏魚子'></img>
        </a>
      </div>
      <Nav__centerBox 
        name={['品牌故事', '產品介紹', '料理烏魚子', '會員中心', '會員登入']}
        href={['/contents/story', '/contents/sample_products', '/contents/sample', '/contents/center', '/contents/login']} />
      <Nav__rightBox click={asideBox__clickHandler} />
      <Nav__asideBox 
        click={asideBox__clickHandler}
        name={['品牌故事', '產品介紹', '料理烏魚子', '常見問題', '檢驗證書', '會員中心', '會員登入']}
        href={['/contents/story', '/contents/sample_products', '/contents/sample', '/contents/sample', '/contents/sample', '/contents/center', '/contents/login']} />
      <div className='nav__shoppingCart'></div>
    </nav>
  )
}
