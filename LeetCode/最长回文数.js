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