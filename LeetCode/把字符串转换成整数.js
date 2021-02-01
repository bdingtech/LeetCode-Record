/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
    //去除字符串两边的空格
    const num = parseInt(str.trim())
    const MAX = Math.pow(2,31) - 1
    const MIN = -Math.pow(2,31)
    if(num){
        if(num >= MAX){
            return MAX
        }
        if(num <= MIN){
            return MIN
        }
        return num
    }
    return 0
};