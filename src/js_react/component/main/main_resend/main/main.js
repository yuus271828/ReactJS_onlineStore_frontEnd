import React, { useState } from "react";
import Main__resendForm__input from "./main__resendForm__input.js";
import Main__messages__list from "./main__messages__list";
import { validEmail } from "../../../universal/regex_setting.js";

export default function Main(){
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
    fetch("http://localhost:8081/api/email/resend",{
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
    <div className='resend__main'>
      <div className="resend__main__resendBox">
        <div className='resend__resendBox__title'>重發驗證信</div>
        <form className='resend__resendBox__form' method='post'>
          <Main__resendForm__input title='電子郵件' type='email' placeholder='請輸入您的e-mail' pattern=''
            value={email}
            change={setEmail}
            />
          {display && 
          <ul className='resend__resendForm__messages'>
            {messages.map((message) => <Main__messages__list key={message} message={message} />)}
          </ul>
          }
          <button className='resend__resendForm__resend' type='submit'
            onClick={resend__clickHandler}
            >發送</button>
          <a className='resend__resendBox__external' href='/contents/login'>會員登入</a>
        </form>
      </div>
    </div>
  )
}
