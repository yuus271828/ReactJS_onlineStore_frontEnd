import React from "react";

function Mian__navBox(props){
  return(
    <div className='main__navBox'>
      <a className='main__navLink main__navTitle' href='/products'>系列產品</a>
      <a className='main__navLink' href={props.href[0]}>{props.listName[0]}</a>
      <a className='main__navLink' href={props.href[1]}>{props.listName[1]}</a>
      <a className='main__navLink' href={props.href[2]}>{props.listName[2]}</a>
      <a className='main__navLink' href={props.href[3]}>{props.listName[3]}</a>
      <a className='main__navLink' href={props.href[4]}>{props.listName[4]}</a>
    </div>
  )
}

export default Mian__navBox;