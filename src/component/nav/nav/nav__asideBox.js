import React from 'react';

export default function Nav__asideBox(props){
  return (
    <div id='nav__menu' className='nav__asideBox nav__asideBox--color'>
      <a onClick={(e) => props.click(e)} className='nav__asideBoxLink nav__asideBoxLink--close'><span>X</span>CLOSE</a>
      <a className='nav__asideBoxLink' href={props.href[0]}>{props.name[0]}</a>
      <a className='nav__asideBoxLink' href={props.href[1]}>{props.name[1]}</a>
      <a className='nav__asideBoxLink' href={props.href[2]}>{props.name[2]}</a>
      <a className='nav__asideBoxLink' href={props.href[3]}>{props.name[3]}</a>
      <a className='nav__asideBoxLink' href={props.href[4]}>{props.name[4]}</a>
      <a className='nav__asideBoxLink' href={props.href[5]}>{props.name[5]}</a>
      <a className='nav__asideBoxLink nav__asideBoxLink--end' href={props.href[6]}>{props.name[6]}</a>
    </div>
  )
}
