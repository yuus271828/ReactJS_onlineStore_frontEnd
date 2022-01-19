import React from "react";

export default function Main__resendForm__input(props){
  return(
    <div className='resend__resendForm'>
      <div className='resend__resendForm__title'>{props.title}</div>
      <input className='resend__resendForm__input' type={props.type} placeholder={props.placeholder} pattern={props.pattern}
        value={props.value}
        onChange={(e)=>props.change(e.target.value)}
      />
    </div>
  )
}
