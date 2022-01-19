
export const validEmail = new RegExp(
  /* 
    開頭為大小寫英數字，
    @前為一個以上的大小寫英數字，且 -.@ 這三個特殊字元不可連在一起，
    @後為「大小寫英數字開頭，.-結尾」組合的循環，
    結尾為2-4位大小寫英數字
  */
  '^\\w+((-\\w+)|(\\.\\w+))*\\@([\\w]+((\\.)|(\\-)))+[\\w]{2,4}$'
);
export const validPassword = new RegExp(
  // 8-16位大小寫英數字
  '^[\\w]{8,16}$'
);
export const validName = new RegExp(
  /*
    開頭為大小寫英文字或中文字，
    再加上0個以上的大小寫英文字、中文字或 _.- 特殊字元
  */
  '^[a-zA-Z\\u4E00-\\u9FFF]+[a-zA-Z\\u4E00-\\u9FFF_\\-\\ ]*[a-zA-Z\\u4E00-\\u9FFF]*$'
);
export const validPhoneNumber = new RegExp(
  // 8-12位數字或 - 特殊字元
  '^[\\d\\-]{8,12}$'
);
export const validAddress = new RegExp(
  // 一位以上的英數字、中文字或 _- . 等特殊字元
  '^[\\w\\u4E00-\\u9FFF_\\-\\ \\.]+$'
);