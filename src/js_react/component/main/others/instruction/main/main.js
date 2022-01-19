import React from "react";

export default class Main extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className='main'>
        <div className="main1">
          <div>常見問題(大賞烏魚子)、檢驗證書頁面、烏魚子介紹與料理</div>
          <div>購物說明、運費說明、付款方式、交貨方式、其它說明</div>
        </div>
        <div className="main2">
          <div>聯絡方式</div>
        </div>
      </div>
    )
  }
}
