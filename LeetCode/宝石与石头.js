/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0
    stones.split('').forEach((item,index) => {
        if(jewels.indexOf(item) !== -1){
            count++
        }
    })
    return count
};