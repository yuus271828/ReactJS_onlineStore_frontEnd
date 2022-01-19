import React from "react";

export default class Main extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className='main'>
        <div className="main1">
          <div>最新消息</div>
        </div>
        <div className="main2">
          <div>聯絡方式</div>
        </div>
      </div>
    )
  }
}
