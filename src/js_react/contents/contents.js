import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Nav from "../universal/nav/nav.js";
import Header from "../universal/header/header.js";
import Aside from "../universal/aside/aside.js";
import Footer from "../universal/footer/footer.js";
import Main__Login from './member__login/member__login.js';
import Main__Register from './member__register/member__register.js';
import Main__Sample from './sample/sample.js';
import Main__Resend from './member__resend/member__resend.js';
import Main__Forgot from './member__forgot/member__forgot.js';
import Main__ForgotPassword from './member__forgotPassword/member__forgotPassword.js';
import Main__Center from './user__center/user__center.js';
import Main__Message__Page from './message__page/message__page.js';
import Main__Story from './story/story.js';
import Main__Sample__Products from './sample__products/sample__products.js';
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
              <Route index element={<Main__Sample/>}>
              </Route>
              <Route path="login" element={<Main__Login/>} />
              <Route path="register" element={<Main__Register/>} />
              <Route path="resend" element={<Main__Resend/>} />
              <Route path="forgot" element={<Main__Forgot/>} />
              <Route path="forgot_password" element={<Main__ForgotPassword/>}>
              </Route>
              <Route path="center" element={<Main__Center/>} />
              <Route path="message_page" element={<Main__Message__Page/>} />
              <Route path="story" element={<Main__Story/>} />
              <Route path="sample" element={<Main__Sample/>} />
              <Route path="sample_products" element={<Main__Sample__Products/>} />
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