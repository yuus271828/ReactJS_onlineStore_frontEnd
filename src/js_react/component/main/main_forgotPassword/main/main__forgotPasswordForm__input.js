import React from "react";

export default function Main__forgotPasswordForm__input(props){
  return(
    <div className='forgotPassword__forgotPasswordForm'>
      <div className='forgotPassword__forgotPasswordForm__title'>{props.title}</div>
      <input className='forgotPassword__forgotPasswordForm__input' type={props.type} placeholder={props.placeholder} pattern={props.pattern}
        value={props.value}
        onChange={(e)=>props.change(e.target.value)}
      />
    </div>
  )
}
