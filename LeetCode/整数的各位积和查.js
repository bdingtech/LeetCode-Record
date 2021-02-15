/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0
    let mult = 1
    for(item of n.toString()){
        sum+=parseInt(item)
        mult*=parseInt(item)
    }
    return mult - sum
};