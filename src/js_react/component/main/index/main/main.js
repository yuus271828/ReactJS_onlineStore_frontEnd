import React from 'react';
import DisplayBox from './main__display.js';
import SaleBox from './main__sale.js';
import StoryBox from './main__story.js';

export default function Main() {
  return<main className='main'>
    <DisplayBox/>
    <SaleBox/>
    <StoryBox/>
  </main>
}

