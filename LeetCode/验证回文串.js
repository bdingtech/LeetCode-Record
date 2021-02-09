/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //全部转换为小写，然后再去除非字母和数字字符
    let origin = s.toLocaleLowerCase().replace(/[^a-z0-9]/g,'')
    let current = origin.split('').reverse().join('')
    return origin === current
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //全部转换为小写，然后再去除非字母和数字字符
    let origin = s.toLocaleLowerCase().replace(/[^a-z0-9]/g,'')
    //首尾开始比较
    let start = 0
    let end = origin.length - 1
    while(start < end){
        if(origin[start] !== origin[end]){
            return false
        }
        start++
        end--
    }
    return true
};