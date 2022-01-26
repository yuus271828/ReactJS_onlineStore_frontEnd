import React, { useState } from "react";
import Main_ForgotPassword__Input from "./main_forgotPassword__input.js";
import Main_ForgotPassword__Messages from "./main_forgotPassword__messages";
import { validPassword } from "../../../config/regex_setting.js";

export default function Main_ForgotPassword(){
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [messages, setMessages] = useState([]);
  const [display, setDisplay] = useState(false);

  const forgotPassword__clickHandler=(e)=>{
    e.preventDefault();
    let errors = [];
    if(!validPassword.test(password)) errors.push('密碼格式錯誤，請輸入8-16位英數字');
    if(passwordCheck != password) errors.push('確認密碼不相符，請輸入相同密碼');
    setMessages(errors);
    if(errors.length){
      setDisplay(true);
    } else {
      setDisplay(false);
      forgotPassword__sendRequest();
    }
  };
  const forgotPassword__sendRequest=()=>{
    const url = new URL(location.href);
    const token = url.searchParams.get('token');
    const account={password};
    fetch("http://localhost:8081/api/acct/forgot?token="+token,{
      method:"PUT",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(account)
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(res["success"]){ window.location.replace('/contents/message_page?text=forgotPassword_success');}
      else {
        setDisplay(true);
        setMessages([res["message"]]);  
      }
    })
  };

  return(
    <div className='main_forgotPassword'>
      <div className="main_forgotPassword__Box">
        <div className='main_forgotPassword__BoxTitle'>重設密碼</div>
        <form className='main_forgotPassword__BoxForm' method='post'>
          <Main_ForgotPassword__Input title='新密碼' type='password' placeholder='8-16英數字，大小寫不同'
            value={password}
            change={setPassword}
            />
          <Main_ForgotPassword__Input title='密碼確認' type='password' placeholder='請再次輸入您的新密碼'
            value={passwordCheck}
            change={setPasswordCheck}
            />
          {display && 
          <ul className='main_forgotPassword__Messages'>
            {messages.map((message) => <Main_ForgotPassword__Messages key={message} message={message} />)}
          </ul>
          }
          <button className='main_forgotPassword__FormSubmit' type='submit'
            onClick={forgotPassword__clickHandler}
            >確定</button>
        </form>
      </div>
    </div>
  )
}