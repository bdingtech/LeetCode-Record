/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  //先处理极值
  const max = 2147483647;
  const min = -2147483648;
  //得到正数后分离成数组然后再反转
  const num = Number(String(Math.abs(x)).split("").reverse().join(""));
  //根据原始数字正负返回
  if (num >= min && num <= max) {
    return x >= 0 ? num : -num;
  }
  return 0;
};

/**
 *类似欧几里得求法
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  //取正数
  let num = Math.abs(x);
  //类似欧几里得求法
  const max = 2147483647;
  const min = -2147483648;
  let result = 0;
  while (num !== 0) {
    //得到最后一位数,然后再扩展一位数
    result = (num % 10) + result * 10;
    //去除最后一位数
    num = Math.floor(num / 10);
  }
  if (result >= min && result <= max) {
    return x >= 0 ? result : -result;
  }
  return 0;
};
