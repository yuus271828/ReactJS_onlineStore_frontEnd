import React from "react";

export default function MAIN__USERCENTER__INPUT(props){
  return(
    <div className='main_userCenter__Form'>
      <div className='main_userCenter__FormTitle'>{props.title}</div>
      <input className='main_userCenter__FormInput' type={props.type} placeholder={props.placeholder}
        style={props.style}
        disabled={props.disabled}
        readOnly={props.readOnly}
        value={props.value}
        onChange={(e)=>props.change(e.target.value)}
        onClick={(e)=>props.click(e)}
      />
    </div>
  )
}
