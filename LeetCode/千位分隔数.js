/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    n = n.toString().split('').reverse()
    let arr = []
    for(let i = 0; i < n.length; i++){
            arr.push(n[i])
        if( (i + 1) % 3 === 0 && i + 1 != n.length){
            arr.push('.')
        }
    }
    return arr.reverse().join('')
};

/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    n = n.toString().split('')
    for(let i = n.length - 3; i > 0; i -= 3){
        n.splice(i,0,'.')
    }
    return n.join('')
};