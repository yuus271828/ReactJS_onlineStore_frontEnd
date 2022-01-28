import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ASIDE from "./component/aside/aside.js";
import FOOTER from "./component/footer/footer.js";
import './App.scss';
// Index's component
import COVER from './component/others/cover/cover.js'
import NAV_INDEX from './component/nav/nav_index/nav_index.js';
import HEADER_INDEX from './component/header/header_index/header_index.js';
import MAIN_DISPLAYBOX from './component/main/main_displayBox/main_displayBox.js';
import MAIN_SALEBOX from './component/main/main_saleBox/main_saleBox.js';
import MAIN_STORYBOX from './component/main/main_storyBox/main_storyBox.js';
// Contents's component
import NAV from "./component/nav/nav/nav.js";
import HEADER from "./component/header/header/header.js";
import MAIN_LOGIN from './component/main/main_login/main_login.js';
import MAIN_REGISTER from './component/main/main_register/main_register.js';
import MAIN_SAMPLE from './component/main/main_sample/main_sample.js';
import MAIN_RESEND from './component/main/main_resend/main_resend.js';
import MAIN_FORGOT from './component/main/main_forgot/main_forgot.js';
import MAIN_FORGOTPASSWORD from './component/main/main_forgotPassword/main_forgotPassword.js';
import MAIN_USERCENTER from './component/main/main_userCenter/main_userCenter.js';
import MAIN_MESSAGEPAGE from './component/main/main_messagePage/main_messagePage.js';

export default function APP() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<INDEX_ROOT/>} />
        <Route path="contents/*" element={<CONTENTS_ROOT/>} />
      </Routes>
    </BrowserRouter>
    <ASIDE/>
    <FOOTER/>
  </>);
}

function INDEX_ROOT() {
  return (<>
    <COVER/>
    <NAV_INDEX/>
    <HEADER_INDEX/>
    <div className='main_index'>
      <MAIN_DISPLAYBOX/>
      <MAIN_SALEBOX/>
      <MAIN_STORYBOX/>
    </div>
  </>);
}

function CONTENTS_ROOT() {
  return (<>
    <NAV/>
    <HEADER/>
    <Routes>
      <Route index element={<MAIN_SAMPLE/>} />
      <Route path="login" element={<MAIN_LOGIN/>} />
      <Route path="register" element={<MAIN_REGISTER/>} />
      <Route path="resend" element={<MAIN_RESEND/>} />
      <Route path="forgot" element={<MAIN_FORGOT/>} />
      <Route path="forgot_password" element={<MAIN_FORGOTPASSWORD/>} />
      <Route path="center" element={<MAIN_USERCENTER/>} />
      <Route path="message_page" element={<MAIN_MESSAGEPAGE/>} />
      <Route path="story" element={<MAIN_STORYBOX/>} />
      <Route path="sample" element={<MAIN_SAMPLE/>} />
      <Route path="sample_products" element={<MAIN_DISPLAYBOX/>} />
    </Routes>
  </>);
}
