import React, { useState } from "react";
import Main__forgotForm__input from "./main__forgotForm__input.js";
import Main__messages__list from "./main__messages__list";
import { validEmail } from "../../../universal/regex_setting.js";

export default function Main(){
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState([]);
  const [display, setDisplay] = useState(false);
  
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
  const forgot__sendRequest=()=>{
    const account={email};
    fetch("http://localhost:8081/api/email/sendForgot",{
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
    <div className='forgot__main'>
      <div className="forgot__main__forgotBox">
        <div className='forgot__forgotBox__title'>忘記密碼</div>
        <form className='forgot__forgotBox__form' method='post'>
          <Main__forgotForm__input title='電子郵件' type='email' placeholder='請輸入您的e-mail' pattern=''
            value={email}
            change={setEmail}
            />
          {display && 
          <ul className='forgot__forgotForm__messages'>
            {messages.map((message) => <Main__messages__list key={message} message={message} />)}
          </ul>
          }
          <button className='forgot__forgotForm__forgot' type='submit'
            onClick={forgot__clickHandler}
            >發送</button>
          <a className='forgot__forgotBox__external' href='/contents/login'>會員登入</a>
        </form>
      </div>
    </div>
  )
}
