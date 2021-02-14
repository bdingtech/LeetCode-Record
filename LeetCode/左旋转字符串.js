/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    return s.split('').slice(n).join('') + s.split('').splice(0,n).join('') 
};