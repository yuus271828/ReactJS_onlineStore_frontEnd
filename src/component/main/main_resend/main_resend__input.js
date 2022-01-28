import React from "react";

export default function MAIN_RESEND__INPUT(props){
  return(
    <div className='main_resend__Form'>
      <div className='main_resend__FormTitle'>{props.title}</div>
      <input className='main_resend__FormInput' type={props.type} placeholder={props.placeholder}
        value={props.value}
        onChange={(e)=>props.change(e.target.value)}
      />
    </div>
  )
}
