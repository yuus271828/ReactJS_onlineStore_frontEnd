import React, { useEffect, useState } from "react";

export default function Main_Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState('');
  const [error, setError] = useState(false);

  // 與後端連線，判斷是否為登入狀態
  useEffect(()=>{
      fetch("http://localhost:8081/api/user/connected",{
      method:"GET",
        headers:{
          'Authorization': 'Bearer ' + localStorage.getItem("JWToken"),
        },
      })
      .then(res=>res.json())
      .then((res)=>{
        if(res['success']){
          // 己登入，跳轉到 message__page
          window.location.replace('/contents/message_page?text=logged')
        }
      });
  },[])
  const login__clickHandler=(e)=>{
    e.preventDefault();
    const account={email, password};
    fetch("http://localhost:8081/api/auth/login",{
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(account)
    })
    .then(res=>res.json())
    .then((res)=>{
      localStorage.setItem("JWToken", res["token"]);
      if(localStorage.getItem("JWToken") == 'undefined') {
        setError(true);
        setMessages("帳號不存在，或輸入密碼錯誤");
        setPassword('');
      } else if(localStorage.getItem("JWToken") == 'unverified'){
        setError(true);
        setMessages("帳號尚未通過驗證，若末收到驗證信，可點選右下角連結重新發送");
        setPassword('');
      }else {
        setError(false);
        setMessages('');
        window.location.replace('/contents/message_page?text=login_success');
      }
    })
  };

  return(
    <div className='main_login'>
      <div className="main_loginBox">
        {/* =TITLE */}
        <div className='main_loginBox__title'>會員登入</div>
        {/* =FORM */}
        <form className='main_loginBox__form' method='post'>
          <div className='main_loginForm main_loginForm__input'>
            <div>帳號</div>
            <input type='text' placeholder='請輸入您的e-mail'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className='main_loginForm main_loginForm__input'>
            <div>密碼</div>
            <input type='password' placeholder='請輸入您的密碼'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          {error && <span className='main_loginForm main_loginForm__messages'>• {messages}</span>}
          <button className='main_loginForm__login' type='submit'
            onClick={login__clickHandler}
          >登入</button>
          <div className='main_loginForm main_loginForm__others'>
            <a href='/contents/forgot'>忘記密碼</a>
            <a href='/contents/resend'>重發驗證信</a>
          </div>
        </form>
        {/* =LINK */}
        <a className='main_loginBox__bottom' href='/contents/register'>註冊帳號</a>
      </div>
    </div>
  )
}
