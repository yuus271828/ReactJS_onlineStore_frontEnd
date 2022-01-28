import React from 'react';

export default function ASIDE(){
  const toTop__clickHaddler = (e) => {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  const preventJump = (e) => {
    e.preventDefault();
  }
  return (
    <aside className='aside'>
      <a href='###' onClick={preventJump} className='asideTool'>&nbsp;訂購單下載&nbsp;<span className='icofont-download'></span></a>
      <a href='###' onClick={preventJump} className='asideTool asideTool--line'>LINE</a>
      <a href='###' onClick={toTop__clickHaddler} className='icofont-thin-up asideTool asideTool--top'> </a>
    </aside>
  )
}
