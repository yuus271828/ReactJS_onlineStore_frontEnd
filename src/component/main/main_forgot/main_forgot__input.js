import React from "react";

export default function MAIN_FORGOT__INPUT(props){
  return(
    <div className='main_forgot__Form'>
      <div className='main_forgot__FormTitle'>{props.title}</div>
      <input className='main_forgot__FormInput' type={props.type} placeholder={props.placeholder}
        value={props.value}
        onChange={(e)=>props.change(e.target.value)}
      />
    </div>
  )
}
