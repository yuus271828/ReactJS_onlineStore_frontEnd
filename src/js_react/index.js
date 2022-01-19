import React from 'react';
import ReactDOM from 'react-dom';
import Cover from './component/others/cover/cover.js'
import Nav_Index from './component/nav/nav_index/nav_index.js';
import Header_Index from './component/header/header_index/header_index.js';
import Main_DisplayBox from './component/main/main_displayBox/main_displayBox.js';
import Main_SaleBox from './component/main/main_saleBox/main_saleBox.js';
import Main_StoryBox from './component/main/main_storyBox/main_storyBox.js';
import Aside from './component/aside/aside.js';
import Footer from './component/footer/footer.js';
import './index.scss';

class Root__Index extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
        <Nav_Index/>
        <Header_Index/>
        <div className='main_index'>
          <Main_DisplayBox/>
          <Main_SaleBox/>
          <Main_StoryBox/>
        </div>
        <Aside/>
        <Footer/>
      </>
    )
  }
}

ReactDOM.render(<Cover/>, document.getElementById("root__cover"));
ReactDOM.render(<Root__Index/>, document.getElementById("root"));