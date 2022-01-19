import React from 'react';
import ConnectionBox from './footer__connection';
import BottomBox from './footer__bottom';

export default function Footer(){
  return (
    <footer className='footer'>
      <ConnectionBox/>
      <BottomBox/>
    </footer>
  )
}
