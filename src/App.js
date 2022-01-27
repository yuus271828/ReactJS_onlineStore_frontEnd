import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aside from "./component/aside/aside.js";
import Footer from "./component/footer/footer.js";
import './App.scss';
// Index's component
import Cover from './component/others/cover/cover.js'
import Nav_Index from './component/nav/nav_index/nav_index.js';
import Header_Index from './component/header/header_index/header_index.js';
import Main_DisplayBox from './component/main/main_displayBox/main_displayBox.js';
import Main_SaleBox from './component/main/main_saleBox/main_saleBox.js';
import Main_StoryBox from './component/main/main_storyBox/main_storyBox.js';
// Contents's component
import Nav from "./component/nav/nav/nav.js";
import Header from "./component/header/header/header.js";
import Main_Login from './component/main/main_login/main_login.js';
import Main_Register from './component/main/main_register/main_register.js';
import Main_Sample from './component/main/main_sample/main_sample.js';
import Main_Resend from './component/main/main_resend/main_resend.js';
import Main_Forgot from './component/main/main_forgot/main_forgot.js';
import Main_ForgotPassword from './component/main/main_forgotPassword/main_forgotPassword.js';
import Main_UserCenter from './component/main/main_userCenter/main_userCenter.js';
import Main_MessagePage from './component/main/main_messagePage/main_messagePage.js';

export default function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index_Root/>} />
        <Route path="contents/*" element={<Contents_Root/>} />
      </Routes>
    </BrowserRouter>
    <Aside/>
    <Footer/>
  </>);
}

function Index_Root() {
  return (<>
    <Cover/>
    <Nav_Index/>
    <Header_Index/>
    <div className='main_index'>
      <Main_DisplayBox/>
      <Main_SaleBox/>
      <Main_StoryBox/>
    </div>
  </>);
}

function Contents_Root() {
  return (<>
    <Nav/>
    <Header/>
    <Routes>
      <Route index element={<Main_Sample/>} />
      <Route path="login" element={<Main_Login/>} />
      <Route path="register" element={<Main_Register/>} />
      <Route path="resend" element={<Main_Resend/>} />
      <Route path="forgot" element={<Main_Forgot/>} />
      <Route path="forgot_password" element={<Main_ForgotPassword/>} />
      <Route path="center" element={<Main_UserCenter/>} />
      <Route path="message_page" element={<Main_MessagePage/>} />
      <Route path="story" element={<Main_StoryBox/>} />
      <Route path="sample" element={<Main_Sample/>} />
      <Route path="sample_products" element={<Main_DisplayBox/>} />
    </Routes>
  </>);
}
