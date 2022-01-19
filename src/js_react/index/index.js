import React from 'react';
import Cover from './cover/cover.js'
import Index__Nav from './index__nav/nav.js';
import Index__Header from './index__header/header.js';
import Main from './main/main.js';
import Aside from '../universal/aside/aside.js';
import Footer from '../universal/footer/footer.js';
import './index.scss';
import ReactDOM from 'react-dom';


class Root__Index extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
        <Index__Nav/>
        <Index__Header/>
        <Main/>
        <Aside/>
        <Footer/>
      </>
    )
  }
}

ReactDOM.render(<Cover/>, document.getElementById("root__cover"));
ReactDOM.render(<Root__Index/>, document.getElementById("root"));