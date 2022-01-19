import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./component/nav/nav/nav.js";
import Header from "./component/header/header/header.js";
import Aside from "./component/aside/aside.js";
import Footer from "./component/footer/footer.js";
import Main_Login from './component/main/main_login/main_login.js';
import Main_Register from './component/main/main_register/main_register.js';
import Main_Sample from './component/main/main_sample/main_sample.js';
import Main_Resend from './component/main/main_resend/main_resend.js';
import Main_Forgot from './component/main/main_forgot/main_forgot.js';
import Main_ForgotPassword from './component/main/main_forgotPassword/main_forgotPassword.js';
import Main_UserCenter from './component/main/main_userCenter/main_userCenter.js';
import Main_MessagePage from './component/main/main_messagePage/main_messagePage.js';
import Main_StoryBox from './component/main/main_storyBox/main_storyBox.js';
import Main_DisplayBox from './component/main/main_displayBox/main_displayBox.js';
import './contents.scss';


class Root__Contents extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
        <Nav/>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="contents/">
              <Route index element={<Main_Sample/>}>
              </Route>
              <Route path="login" element={<Main_Login/>} />
              <Route path="register" element={<Main_Register/>} />
              <Route path="resend" element={<Main_Resend/>} />
              <Route path="forgot" element={<Main_Forgot/>} />
              <Route path="forgot_password" element={<Main_ForgotPassword/>}>
              </Route>
              <Route path="center" element={<Main_UserCenter/>} />
              <Route path="message_page" element={<Main_MessagePage/>} />
              <Route path="story" element={<Main_StoryBox/>} />
              <Route path="sample" element={<Main_Sample/>} />
              <Route path="sample_products" element={<Main_DisplayBox/>} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Aside/>
        <Footer/>
      </>
    )
  }
}

ReactDOM.render(<Root__Contents/>, document.getElementById("root"));