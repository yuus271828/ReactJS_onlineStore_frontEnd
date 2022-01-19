import React, { useState, useEffect } from "react";
import Main__centerForm__input from "./main__centerForm__input.js";
import Main__messages__list from "./main__messages__list";
import { validName, validPhoneNumber, validAddress } from "../../../universal/regex_setting.js";

export default function Main(){
  // editInfo 代表是否可編輯，控制input與button
  const [editInfo, setEditInfo] = useState(false);
  // connected 代表是否連到後端，控制'登出'與'前往登入頁面'
  const [connected, setConnected] = useState(false);
  // display 代表是否顯示訊息，控制 Main__messages__list
  const [display, setDisplay] = useState(false);
  const [messages, setMessages] = useState([]);
  const [email, setEmail] = useState('尚未登入');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');


  // 與後端連線，獲取 user 資料，判斷是否為登入狀態
  useEffect(()=>{ 
      fetch("http://localhost:8081/api/user/getUserInfo",{
        method:"GET",
        headers:{
          'Authorization': 'Bearer ' + localStorage.getItem("JWToken"),
        },
      })
      .then(res=>res.json())
      .then((res)=>{
        if(res['error']){
          // 如果連線失敗，表示未登入
          setConnected(false);
          setEmail('尚未登入')
          return;
        }
        // 如果連線成功，就設定 connented, email
        setConnected(true);
        setEmail(res['email']);
        if(!editInfo && res['lastName']){
          // 如果是 false ，且資料非 null 就取資料然後設定 state
          setLastName(res['lastName']);
          setFirstName(res['firstName']);
          setPhoneNumber(res['phoneNumber']);
          setAddress(res['address']);
        };
      })
  },[email])
  //
  const editInfo__clickHandler=(e)=>{
    e.preventDefault();
    if(email == '尚未登入') {
      setDisplay(true);
      setMessages(['登入後才可編輯資料']);
      return;
    }
    let errors = [];
    // 若 editInfo 為 false 就跳過 errors 檢查
    if(editInfo){
      if(!validName.test(lastName)) errors.push('姓氏不可包含特殊字元');
      if(!validName.test(firstName)) errors.push('名字不可包含特殊字元');
      if(!validPhoneNumber.test(phoneNumber)) errors.push('手機格式錯誤，請輸入8-12位數字');
      if(!validAddress.test(address)) errors.push('地址不可為空白，也不可加入特殊字元');  
    }
    // 若資料不符合格式，就印出錯誤並 return
    if(errors.length){
      setMessages(errors);
      setDisplay(true);
      return;
    }
    setDisplay(false);
    // 如果 editInfo 為 true，就發送新的資料給後端修改
    if(editInfo) updateUserInfo();
    // 如果 editInfo 為 false，就切換成 true
    else setEditInfo(true);
  };
  // 鎖住 input 凍結資料
  const onChangeStoper=()=>{}
  // 提示編輯資料
  const input__clickHandler=()=>{
    console.log('input');
    if(!editInfo) alert('請點擊"編輯資料"啟用編輯模式');
  }
  // 送出更新資料的 request
  const updateUserInfo=()=>{
    const userInfo={lastName, firstName, phoneNumber, address};
    fetch("http://localhost:8081/api/user/updateUserInfo",{
      method:"PUT",
      headers:{
        'Authorization': 'Bearer ' + localStorage.getItem("JWToken"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then((res)=>res.json())
    .then((res)=>{
      setDisplay(true);
      setMessages([res["message"]]);
      if(res["success"]){
        // 如果更新成功，就切換 editInfo 為 false
        setEditInfo(false);
      }
    })
  };
  // 登出會員
  const logout__clickHandler=()=>{
    let JWToken = localStorage.getItem('JWToken');
    if(!JWToken) {
      setDisplay(true);
      setMessages(['尚未登入']);
      return;
    }
    localStorage.removeItem('JWToken');
    window.location.replace('/contents/message_page?text=logout_success');
  };

  return(
    <div className='center__main'>
      <div className="center__main__centerBox">
        <div className='center__centerBox__title'>會員中心</div>
        <form className='center__centerBox__form' method='post'>
          <div className='center__centerForm__email'>
            <span className='center__centerForm__input'>帳號：{email}</span>
          </div>
          <Main__centerForm__input title='姓氏：' type='text' placeholder='您的姓氏'
            value={lastName}
            disabled={editInfo ? "" : "disabled"}
            readyOnly={editInfo ? "readOnly" : ""}
            change={editInfo ? setLastName : onChangeStoper}
            click={input__clickHandler}
            />
          <Main__centerForm__input title='名字：' type='text' placeholder='您的名字'
            value={firstName}
            disabled={editInfo ? "" : "disabled"}
            readyOnly={editInfo ? "readOnly" : ""}
            change={editInfo ? setFirstName : onChangeStoper}
            click={input__clickHandler}
            />
          <Main__centerForm__input title='手機號碼：' type='text' placeholder='您的手機號碼'
            value={phoneNumber}
            disabled={editInfo ? "" : "disabled"}
            readyOnly={editInfo ? "readOnly" : ""}
            change={editInfo ? setPhoneNumber : onChangeStoper}
            click={input__clickHandler}
            />
          <Main__centerForm__input title='收件地址：' type='text' placeholder='您的收件地址'
            value={address}
            disabled={editInfo ? "" : "disabled"}
            readyOnly={editInfo ? "readOnly" : ""}
            change={editInfo ? setAddress : onChangeStoper}
            click={input__clickHandler}
            />
          {display && 
          <ul className='center__centerForm__messages'>
            {messages.map((message) => <Main__messages__list key={message} message={message} />)}
          </ul>
          }
          <button className='center__centerForm__center' type='submit'
            onClick={editInfo__clickHandler}>
            {editInfo ? '保存資料' : '編輯資料'}
          </button>
        </form>
        { connected
          ? <a className='center__centerBox__external' onClick={logout__clickHandler}>會員登出</a>
          : <a className='center__centerBox__external' href='/contents/login'>前往登入頁面</a>}
      </div>
    </div>
  )
}
