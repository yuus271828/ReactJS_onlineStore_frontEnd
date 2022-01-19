import React from "react";
import Main__saleBox from "./main__saleBox";
import Mian__navBox from "./main__navBox";

class Main extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='main'>
        <div className='main__title'>頂級嚴選烏魚子</div>
        <div className='main__index'>首頁/系列產品/頂級嚴選烏魚子</div>
        <Mian__navBox
          listName={['頂級嚴選烏魚子', '本產養殖烏魚子', '一口吃系列', '烏魚腱', '生鮮魚蝦']}
          href={['/products__list', '/products__list', '/products__list', '/products__list', '/products__list']} />
        <div className='main__saleContainer'>
          <Main__saleBox
            name='頂級嚴選烏魚子【四兩】' price='NT$100' discount='五折優惠' img='' href='/products__list__name' />
          <Main__saleBox
            name='頂級嚴選烏魚子【五兩】' price='NT$100' discount='五折優惠' img='' href='/products__list__name' />
          <Main__saleBox
            name='頂級嚴選烏魚子【六兩】' price='NT$100' discount='五折優惠' img='' href='/products__list__name' />
          <Main__saleBox
            name='頂級嚴選烏魚子【七兩】' price='NT$100' discount='五折優惠' img='' href='/products__list__name' />
          <Main__saleBox
            name='頂級嚴選烏魚子【八兩】' price='NT$100' discount='五折優惠' img='' href='/products__list__name' />
        </div>
      </div>
    )
  }
}

export default Main;