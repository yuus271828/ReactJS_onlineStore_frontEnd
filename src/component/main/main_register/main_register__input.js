import React from "react";

export default function MAIN_REGISTER__INPUT(props){
  return(
    <div className='main_register__Form'>
      <div className='main_register__FormTitle'>{props.title}</div>
      <input className='main_register__FormInput' type={props.type} placeholder={props.placeholder}
        value={props.value}
        onChange={(e)=>props.change(e.target.value)}
      />
    </div>
  )
}
