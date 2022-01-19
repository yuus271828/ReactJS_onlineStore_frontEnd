import React from "react";

export default function Main__Story() {

  return (
    <div className='story__main'>
      {/* =TEXT */}
      <div className='story__mainTitle'>五十年傳承的生態養殖技術</div>
      <div className='story__mainOutline'>
        每尾烏魚歷時三年養殖，從養殖到製作的每一道程序都為您嚴格把關。茂洋烏魚子傳承父親五十多年的養殖經驗與技術，導入創新健康理念。以低密度生態混養烏魚、白蝦與石斑，用三年的時間，讓烏魚在友善的環境中成長，結出健康無毒的烏魚卵。SGS檢測合格、不含重金屬、不使用化學添加物經選卵、去血、鹽漬、壓實、冷風乾燥等多道工序成形，再利用室內的氣溫調節室曝曬魚卵。在衛生的環境中控管烏魚子的品質，全程不使用化學添加物。
      </div>
      {/* =LINK */}
      <a className='story__mainMore'>了解更多</a>
      {/* =IMAGE */}
      <picture className='story__mainImg'>
        <img src='/static/index_main_storyImg.jpg' alt='烏魚子製程' />
      </picture>
      {/* =BOTTOM */}
      <div className='story__mainCertificate'>
        <div className='storyCertificate__title'>安全認證 &amp; 標章</div>
        <picture>
          <img src='/static/index_main_storyCertificate_1.png' alt='SGS檢測標章' />
        </picture>
        <picture>
          <img src='/static/index_main_storyCertificate_2.png' alt='雲林良品' />
        </picture>
        <picture>
          <img src='/static/index_main_storyCertificate_3.png' alt='sample' />
        </picture>
        <picture>
          <img src='/static/index_main_storyCertificate_3.png' alt='sample' />
        </picture>
        <picture>
          <img src='/static/index_main_storyCertificate_3.png' alt='sample' />
        </picture>
        <picture>
          <img src='/static/index_main_storyCertificate_3.png' alt='sample' />
        </picture>
      </div>
      <img className='story__mainBackground' src='/static/index_main_storyBackground.jpg' alt='茂洋烏魚子'></img>
    </div>
  )

}
