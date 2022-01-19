import React, { useState } from "react";
import Main__forgotPasswordForm__input from "./main__forgotPasswordForm__input.js";
import Main__messages__list from "./main__messages__list";
import { validPassword } from "../../../universal/regex_setting.js";

export default function Main(){
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
    <div className='forgotPassword__main'>
      <div className="forgotPassword__main__forgotPasswordBox">
        <div className='forgotPassword__forgotPasswordBox__title'>重設密碼</div>
        <form className='forgotPassword__forgotPasswordBox__form' method='post'>
          <Main__forgotPasswordForm__input title='新密碼' type='password' placeholder='8-16英數字，大小寫不同' pattern=''
            value={password}
            change={setPassword}
            />
          <Main__forgotPasswordForm__input title='密碼確認' type='password' placeholder='請再次輸入您的新密碼' pattern=''
            value={passwordCheck}
            change={setPasswordCheck}
            />
          {display && 
          <ul className='forgotPassword__forgotPasswordForm__messages'>
            {messages.map((message) => <Main__messages__list key={message} message={message} />)}
          </ul>
          }
          <button className='forgotPassword__forgotPasswordForm__forgotPassword' type='submit'
            onClick={forgotPassword__clickHandler}
            >確定</button>
        </form>
      </div>
    </div>
  )
}
