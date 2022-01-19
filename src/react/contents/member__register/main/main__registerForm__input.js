import React from "react";

export default function Main__registerForm__input(props){
  return(
    <div className='register__registerForm'>
      <div className='register__registerForm__title'>{props.title}</div>
      <input className='register__registerForm__input' type={props.type} placeholder={props.placeholder}
        value={props.value}
        onChange={(e)=>props.change(e.target.value)}
      />
    </div>
  )
}
