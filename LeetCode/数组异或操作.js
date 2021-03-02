/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let temp = 0
    for(let i = 0; i < n; i++){
       temp ^= start + (2 * i)
    }
    return temp
};