import React from "react";

export default function Main_ForgotPassword__Input(props){
  return(
    <div className='main_forgotPassword__Form'>
      <div className='main_forgotPassword__FormTitle'>{props.title}</div>
      <input className='main_forgotPassword__FormInput' type={props.type} placeholder={props.placeholder}
        value={props.value}
        onChange={(e)=>props.change(e.target.value)}
      />
    </div>
  )
}
