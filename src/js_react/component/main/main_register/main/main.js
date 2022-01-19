import React, { useState } from "react";
import Main__registerForm__input from "./main__registerForm__input.js";
import Main__messages__list from "./main__messages__list";
import { validEmail, validPassword } from "../../../universal/regex_setting.js";

export default function Main(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [messages, setMessages] = useState([]);
  const [display, setDisplay] = useState(false);


  const register__clickHandler=(e)=>{
    e.preventDefault();
    let errors = [];
    if(!validEmail.test(email)) errors.push('信箱格式錯誤，請輸入有效 email');
    if(!validPassword.test(password)) errors.push('密碼格式錯誤，請輸入8-16位英數字');
    if(passwordCheck != password) errors.push('確認密碼不相符，請輸入相同密碼');
    setMessages(errors);
    if(errors.length){
      setDisplay(true);
    } else {
      setDisplay(false);
      register__sendRequest();
    }
  };
  const register__sendRequest=()=>{
    const account={email, password};
    fetch("http://localhost:8081/api/acct/register",{
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
    <div className='register__main'>
      <div className="register__main__registerBox">
        <div className='register__registerBox__title'>註冊會員</div>
        <form className='register__registerBox__form' method='post'>
          <Main__registerForm__input title='電子郵件' type='email' placeholder='請輸入您的e-mail'
            value={email}
            change={setEmail}
            />
          <Main__registerForm__input title='密碼' type='password' placeholder='8-16英數字，大小寫不同'
            value={password}
            change={setPassword}
            />
          <Main__registerForm__input title='確認密碼' type='password' placeholder='再次輸入密碼'
            value={passwordCheck}
            change={setPasswordCheck}
            />
          {display && 
          <ul className='register__registerForm__messages'>
            {messages.map((message) => <Main__messages__list key={message} message={message} />)}
          </ul>
          }
          <button className='register__registerForm__register' type='submit'
            onClick={register__clickHandler}
            >註冊</button>
        </form>
        <a className='register__registerBox__external' href='/contents/login'>會員登入</a>
      </div>
    </div>
  )
}
