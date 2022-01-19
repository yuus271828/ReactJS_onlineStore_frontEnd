import React, { useEffect } from 'react';

export default function Cover() {
  useEffect(()=>{
    let timer;
    const cover__fadeOut = () => {
      let start = Date.now();
      let cover = document.getElementsByClassName("cover")[0];
      timer = requestAnimationFrame(function animate(timestamp) {
        let interval = Date.now() - start;
        let timeOutInterval = interval - 1500;
        if (timeOutInterval < 0) timeOutInterval = 0;
        cover.style.opacity = Math.max(1 - timeOutInterval / 300, 0);
        if (timeOutInterval < 300) requestAnimationFrame(animate);
        else {
          cover.style.visibility = 'hidden';
          document.body.style.overflowY = 'auto';
        }
      });
    }  
    cover__fadeOut();
    document.body.style.overflowY = 'hidden';
    return () => cancelAnimationFrame(timer);
  },[])

  return (
    <>
      <div className='cover'>
        <img className='cover__img' src='/static/logo_tr(600x600).svg' alt='茂洋烏魚子'></img>
      </div>
    </>
  )
}

