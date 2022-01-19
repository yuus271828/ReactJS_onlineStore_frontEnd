import React from 'react';
import Main__displayBox from './main__displayBox';

class Main extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='main'>
        <div className='main__title'>系列產品</div>
        <div className='main__index'>首頁/系列產品</div>
        <div className='main__displayContainer'>
          <Main__displayBox
            name='頂級嚴選烏魚子' number='5' discount='五折優惠' img='' href='/products__list' />
          <Main__displayBox
            name='本產養殖烏魚子' number='4' discount='五折優惠' img='' href='/products__list' />
          <Main__displayBox
            name='一口吃系列' number='2' discount='五折優惠' img='' href='/products__list' />
          <Main__displayBox
            name='烏魚腱' number='1' discount='五折優惠' img='' href='/products__list' />
          <Main__displayBox
            name='生鮮魚蝦' number='2' discount='五折優惠' img='' href='/products__list' />
        </div>
      </div>
    )
  }
}

export default Main;