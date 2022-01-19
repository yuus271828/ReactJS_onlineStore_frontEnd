import React from "react";

export default class Main extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='story__main'>
        <div className="story__main1">
          <div>品牌故事</div>
          <div>檢驗證書</div>
        </div>
        <div className="story__main2">
          <div>聯絡方式</div>
        </div>
      </div>
    )
  }
}
