import React from "react";

export default function Main__centerForm__input(props){
  return(
    <div className='center__centerForm'>
      <div className='center__centerForm__title'>{props.title}</div>
      <input className='center__centerForm__input' type={props.type} placeholder={props.placeholder}
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
