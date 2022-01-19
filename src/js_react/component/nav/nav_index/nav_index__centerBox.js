import React from 'react';

export default function Nav_Index__centerBox(props){
  return (
    <div className='nav_index__centerBox'>
      <a className='nav_index__centerBoxLink' href={props.href[0]} title={props.name[0]} >{props.name[0]}</a>
      <a className='nav_index__centerBoxLink' href={props.href[1]} title={props.name[1]} >{props.name[1]}</a>
      <a className='nav_index__centerBoxLink' href={props.href[2]} title={props.name[2]} >{props.name[2]}</a>
      <a className='nav_index__centerBoxLink' href={props.href[3]} title={props.name[3]} >{props.name[3]}</a>
      <a className='nav_index__centerBoxLink nav_index__centerBoxLink--R' href={props.href[4]} title={props.name[4]} >{props.name[4]}</a>
    </div>
  )
}
