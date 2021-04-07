/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let flag = 0
    let max = 0
    for(item of s){
        if(item === '('){
            flag++
        }else if(item === ')'){
            flag--
        }
        max = flag > max ? flag : max 
    }
    return max
};