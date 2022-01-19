import React, { useState } from "react";

export default function Main() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      localStorage.setItem("JWTtoken", res["token"]);
      if(localStorage.getItem("JWTtoken") == 'undefined') {
        alert("帳號不存在，或輸入密碼錯誤");
        setPassword('');
      } else {
        alert("登入成功");
        window.location.replace('/');
      }
    })
  };

  return(
    <div className='login__main'>
      <div className="login__main__loginBox">
        {/* =TITLE */}
        <div className='login__loginBox__title'>會員登入</div>
        {/* =FORM */}
        <form className='login__loginBox__form' method='post'>
          <div className='login__loginForm login__loginForm__input'>
            <div>帳號</div>
            <input type='text' placeholder='請輸入您的e-mail'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className='login__loginForm login__loginForm__input'>
            <div>密碼</div>
            <input type='password' placeholder='請輸入您的密碼'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className='login__loginForm login__loginForm__CAPTCHA'>
            <div>驗證碼</div>
            <input type='text' name='CAPTCHA' placeholder='驗證碼'
            />
            <img/>
          </div>
          <div className='login__loginForm login__loginForm__others'>
            <a href='/contents/forgot'>忘記密碼</a>
            <a href='/contents/resend'>重發驗證信</a>
          </div>
          <button className='login__loginForm__login' type='submit'
            onClick={login__clickHandler}
          >登入</button>
        </form>
        {/* =LINK */}
        <a className='login__loginBox__external'>facebook登入</a>
        <a className='login__loginBox__external'>google登入</a>
        <a className='login__loginBox__bottom' href='/contents/register'>還沒有帳號？<span>&nbsp;註冊</span></a>
        <a className='login__loginBox__bottom login__loginBox__bottom--end'>非會員查詢訂單</a>
      </div>
    </div>
  )
}
