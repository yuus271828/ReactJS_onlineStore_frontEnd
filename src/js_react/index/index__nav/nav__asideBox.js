import React from 'react';

export default function Nav__asideBox(props){
  return (
    <div id='index__nav__menu' className='index__nav__asideBox index__nav__asideBox--color'>
      <a onClick={(e) => props.click(e)} className='index__asideBox__Link index__asideBox__Link--close'><span>X</span>CLOSE</a>
      <a className='index__asideBox__Link' href={props.href[0]}>{props.name[0]}</a>
      <a className='index__asideBox__Link' href={props.href[1]}>{props.name[1]}</a>
      <a className='index__asideBox__Link' href={props.href[2]}>{props.name[2]}</a>
      <a className='index__asideBox__Link' href={props.href[3]}>{props.name[3]}</a>
      <a className='index__asideBox__Link' href={props.href[4]}>{props.name[4]}</a>
      <a className='index__asideBox__Link' href={props.href[5]}>{props.name[5]}</a>
      <a className='index__asideBox__Link index__asideBox__Link--end' href={props.href[6]}>{props.name[6]}</a>
    </div>
  )
}
