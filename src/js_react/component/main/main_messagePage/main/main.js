import React, { useEffect, useState } from "react";

export default function Main(){
  const [message, setMessage] = useState('');
  const [link, setLink] = useState(true);

  useEffect(()=>{
    const url = new URL(location.href);
    const text = url.searchParams.get('text');
    if(text == 'verify_success') setMessage('驗證成功');
    if(text == 'verify_failed') setMessage('驗證失敗');
    if(text == 'resend_success') setMessage('信件發送成功');
    if(text == 'forgot_success') setMessage('信件發送成功');
    if(text == 'forgotPassword_success') setMessage('密碼重設成功');
    if(text == 'register_success') setMessage('註冊成功，請前往信箱驗證帳號');
    if(text == 'logout_success') setMessage('登出成功');
    if(text == 'login_success') {
      setMessage('登入成功');
      setLink(false);
    }
    if(text == 'logged') {
      setMessage('己登入');
      setLink(false);
    }
  },[])

  return(
    <div className='messagePage__main'>
      <div className="messagePage__main__messagePageBox">
        <div className='messagePage__messagePageBox__title'>{message}</div>
        <form className='messagePage__messagePageBox__form' method='post'>
          { link
            ? <a className='messagePage__messagePageBox__external' href='/contents/login'>前往登入頁面</a>
            : <a className='messagePage__messagePageBox__external' href='/contents/center'>前往會員中心</a>}
        </form>
      </div>
    </div>
  )
}
