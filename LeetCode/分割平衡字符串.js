/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function (s) {
    let num = 0
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if(s[i] === 'R'){
            num++
        }
        if(s[i] === 'L'){
            num--
        }
        if(num === 0){
            count++
        }
    }
    return count
};