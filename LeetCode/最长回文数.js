/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let hash = new Set()
    let count = 0
    for(let i = 0; i < s.length; i++){
        if(hash.has(s[i])){
            count+= 2
            hash.delete(s[i])
        }else{
            hash.add(s[i])
        }
    }
    return hash.size >= 1 ? count + 1 : count
};

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    //将每个字符存入对象中
    let hash = {}
    let count = 0
    for(let i = 0; i < s.length; i++){
        if(!hash[s[i]]){
            hash[s[i]] = 1
        }else{
            hash[s[i]] += 1
            count+=2
            hash[s[i]] = 0
        }
    }
    let flag = 0
    for(item in hash){
        if(hash[item] >= 1){
            flag++
        }
    }
    return flag >= 1 ? count + 1 : count
};