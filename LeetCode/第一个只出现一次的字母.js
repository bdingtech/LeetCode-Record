/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    for(let i = 0 ; i < s.length; i++){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
            return s[i]
        }
    }
    return " "
};

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    let hash = {}
    //第一次遍历，标记每个字母出现的次数
    for(let i = 0; i < s.length; i++ ){
        if(!hash[s[i]]){
            hash[s[i]] = 1
        }else{
            hash[s[i]]++
        }
    }
    //第二次遍历 找出标记为1的字符
    for(item in hash){
        if(hash[item] === 1){
            return item
        }
    }
    return " "
};