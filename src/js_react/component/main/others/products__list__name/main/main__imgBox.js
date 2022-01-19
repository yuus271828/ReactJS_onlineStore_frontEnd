import React from "react";

export default class Main__imgBox extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="productBox__imgBox">
        <div className='imgBox__largeBox'></div>
        <div className='imgBox__smallBox'></div>
        <div className='imgBox__position'></div>
      </div>
    )
  }
}
