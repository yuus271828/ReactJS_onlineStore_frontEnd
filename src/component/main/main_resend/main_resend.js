import React, { useState } from "react";
import MAIN_RESEND__INPUT from "./main_resend__input.js";
import MAIN_RESEND__MESSAGES from "./main_resend__messages";
import { validEmail } from "../../../config/regex_setting.js";
import { API_HOSTNAME } from "../../../config/env_setting.js";

export default function Main_Resend(){
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState([]);
  const [display, setDisplay] = useState(false);
  
  const resend__clickHandler=(e)=>{
    e.preventDefault();
    let errors = [];
    if(!validEmail.test(email)) errors.push('信箱格式錯誤，請輸入有效 email');
    setMessages(errors);
    if(errors.length){
      setDisplay(true);
    } else {
      setDisplay(false);
      resend__sendRequest();
    }
  };
  const resend__sendRequest=()=>{
    const account={email};
    fetch(API_HOSTNAME+"/api/email/resend",{
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(account)
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(res["success"]){ window.location.replace('/contents/message_page?text=resend_success');}
      else {
        setDisplay(true);
        setMessages([res["message"]]);  
      }
    })
  };

  return(
    <div className='main_resend'>
      <div className="main_resend__Box">
        <div className='main_resend__BoxTitle'>重發驗證信</div>
        <form className='main_resend__BoxForm' method='post'>
          <MAIN_RESEND__INPUT title='電子郵件' type='email' placeholder='請輸入您的e-mail' pattern=''
            value={email}
            change={setEmail}
            />
          {display && 
          <ul className='main_resend__Messages'>
            {messages.map((message) => <MAIN_RESEND__MESSAGES key={message} message={message} />)}
          </ul>
          }
          <button className='main_resend__FormSubmit' type='submit'
            onClick={resend__clickHandler}
            >發送</button>
          <a className='main_resend__BoxExternal' href='/contents/login'>會員登入</a>
        </form>
      </div>
    </div>
  )
}
