import React, { useState } from "react";
import MAIN_FORGOT__INPUT from "./main_forgot__input.js";
import MAIN_FORGOT__MESSAGES from "./main_forgot__messages.js";
import { validEmail } from "../../../config/regex_setting.js";
import { API_HOSTNAME } from "../../../config/env_setting.js";

export default function MAIN_FORGOT(){
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState([]);
  const [display, setDisplay] = useState(false);
  
  // 檢查 input 是否符合格式
  const forgot__clickHandler=(e)=>{
    e.preventDefault();
    let errors = [];
    if(!validEmail.test(email)) errors.push('信箱格式錯誤，請輸入有效 email');
    setMessages(errors);
    if(errors.length){
      setDisplay(true);
    } else {
      setDisplay(false);
      forgot__sendRequest();
    }
  };
  // 發送 request 給後端 API
  const forgot__sendRequest=()=>{
    const account={email};
    fetch(API_HOSTNAME+"/api/email/sendForgot",{
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(account)
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(res["success"]){ window.location.replace('/contents/message_page?text=forgot_success');}
      else {
        setDisplay(true);
        setMessages([res["message"]]);  
      }
    })
  };

  return(
    <div className='main_forgot'>
      <div className="main_forgot__Box">
        <div className='main_forgot__BoxTitle'>忘記密碼</div>
        <form className='main_forgot__BoxForm' method='post'>
          <MAIN_FORGOT__INPUT title='電子郵件' type='email' placeholder='請輸入您的e-mail'
            value={email}
            change={setEmail}
            />
          {display && 
          <ul className='main_forgot__FormMessages'>
            {messages.map((message) => <MAIN_FORGOT__MESSAGES key={message} message={message} />)}
          </ul>
          }
          <button className='main_forgot__FormSubmit' type='submit'
            onClick={forgot__clickHandler}
            >發送</button>
          <a className='main_forgot__BoxExternal' href='/contents/login'>會員登入</a>
        </form>
      </div>
    </div>
  )
}
