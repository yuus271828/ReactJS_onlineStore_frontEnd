import React from 'react';

export default function Aside(){
  const toTop__clickHaddler = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  return (
    <aside className='aside'>
      <a className='asideTool'>&nbsp;訂購單下載&nbsp;<span className='icofont-download'></span></a>
      <a className='asideTool asideTool--line'>LINE</a>
      <a onClick={toTop__clickHaddler} className='icofont-thin-up asideTool asideTool--top'></a>
    </aside>
  )
}
