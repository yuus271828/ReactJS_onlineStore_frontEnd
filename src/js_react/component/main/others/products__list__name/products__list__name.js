import React from "react";
import ReactDOM from "react-dom";
import "./products__list__name.scss";
import Nav from "../universal/nav/nav.js";
import Header from "../universal/header/header.js";
import Main from "./main/main.js";
import Aside from "../universal/aside/aside.js";
import Footer from "../universal/footer/footer.js";

class Root extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
        <Nav/>
        <Header/>
        <Main/>
        <Aside/>
        <Footer/>
      </>
    )
  }
}

ReactDOM.render(<Root/>, document.getElementById('root'));