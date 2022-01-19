import React from "react";

export default class Main__titleBox extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='productBox__titleBox'>
        <div className='titleBox__index'>
          <a href='/products'>系列商品&nbsp;/&nbsp;</a>
          <a href='/products__list'> 頂級嚴選烏魚子&nbsp;/</a>
        </div>
        <div className='titleBox__name'>頂級嚴選烏魚子【八兩】</div>
      </div>
    )
  }
}
