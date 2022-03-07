import React, { useState } from "react";
import MAIN_REGISTER__INPUT from "./main_register__input.js";
import MAIN_REGISTER__MESSAGES from "./main_register__messages";
import { validEmail, validPassword } from "../../../config/regex_setting.js";
import { API_HOSTNAME } from "../../../config/env_setting.js";

export default function Main_Register(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [messages, setMessages] = useState([]);
  const [display, setDisplay] = useState(false);

  // 檢查 input 是否符合格式
  const register__clickHandler=(e)=>{
    e.preventDefault();
    let errors = [];
    if(!validEmail.test(email)) errors.push('信箱格式錯誤，請輸入有效 email');
    if(!validPassword.test(password)) errors.push('密碼格式錯誤，請輸入8-16位英數字');
    if(passwordCheck !== password) errors.push('確認密碼不相符，請輸入相同密碼');
    setMessages(errors);
    if(errors.length){
      setDisplay(true);
    } else {
      setDisplay(false);
      register__sendRequest();
    }
  };
  // 發送 request 給後端 API
  const register__sendRequest=()=>{
    const account={email, password};
    fetch(API_HOSTNAME+"/api/acct/register",{
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(account)
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(res["success"]){ window.location.replace('/contents/message_page?text=register_success');}
      else {
        setDisplay(true);
        setMessages([res["message"]]);  
      }
    })
  };

  return(
    <div className='main_register'>
      <div className="main_register__Box">
        <div className='main_register__BoxTitle'>註冊會員</div>
        <form className='main_register__BoxForm' method='post'>
          <MAIN_REGISTER__INPUT title='電子郵件' type='email' placeholder='請輸入您的e-mail'
            value={email}
            change={setEmail}
            />
          <MAIN_REGISTER__INPUT title='密碼' type='password' placeholder='8-16英數字，大小寫不同'
            value={password}
            change={setPassword}
            />
          <MAIN_REGISTER__INPUT title='確認密碼' type='password' placeholder='再次輸入密碼'
            value={passwordCheck}
            change={setPasswordCheck}
            />
          {display && 
          <ul className='main_register__Messages'>
            {messages.map((message) => <MAIN_REGISTER__MESSAGES key={message} message={message} />)}
          </ul>
          }
          <button className='main_register__FormSubmit' type='submit'
            onClick={register__clickHandler}
            >註冊</button>
        </form>
        <a className='main_register__BoxExternal' href='/contents/login'>會員登入</a>
      </div>
    </div>
  )
}
