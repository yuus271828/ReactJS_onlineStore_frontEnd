import React from 'react';

export default function Footer__ConnectionBox(){
  return (
    <div className='footer__connection'>
      <img className='footer__connectionIcon' src='/static/logo_tr(600x600).svg' alt='茂洋烏魚子'/>
      <div className='footer__connectionDetails'>
        <div className='footer__connectionTitle'>茂洋烏魚子</div>
        <div>訂購專線：00-000-0000</div>
        <div>LINE客服：00-000-0000</div>
        <div>服務時間：全年無休 08：00 - 22：00</div>
        <div>門市資訊：雲林縣麥寮鄉</div>
      </div>
      <div className='footer__connectionExternal'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.5446047324991!2d120.23753492923097!3d23.81225372597598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346ea9aabfec9f27%3A0xc367ba1b723eadb!2z6IyC5rSL5rC055Si6aSK5q6W5aC0L-iMgua0i-awtOeUouihjA!5e0!3m2!1szh-TW!2stw!4v1629007102456!5m2!1szh-TW!2stw" style={{ border:0}} allowfullscreen="" loading="lazy" className='footer__connectionMap'></iframe>
      <div className='footer__connectionLink'>
          <a href='https://www.facebook.com/%E8%8C%82%E6%B4%8B%E6%B0%B4%E7%94%A2%E7%83%8F%E9%AD%9A%E5%AD%90-457935324330930/'>
            <img src='/static/footer_connectionLink_1.png' alt='fb粉絲團'/>
          </a>
          <a>
            <img src='/static/footer_connectionLink_2.png' alt='LINE'/>
          </a>
          <a>
            <img src='/static/footer_connectionLink_3.png' alt='Shopee'/>
          </a>
          <a className='footer__download'>
            <img src='/static/footer_connectionLink_4.png' alt='訂講單下載'/>
          </a>
        </div>
      </div>
    </div>
  )
}
