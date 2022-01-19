import React from "react";

export default function Main__forgotForm__input(props){
  return(
    <div className='forgot__forgotForm'>
      <div className='forgot__forgotForm__title'>{props.title}</div>
      <input className='forgot__forgotForm__input' type={props.type} placeholder={props.placeholder} pattern={props.pattern}
        value={props.value}
        onChange={(e)=>props.change(e.target.value)}
      />
    </div>
  )
}
