/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0
    for(item of stones){
        jewels.indexOf(item) !== -1 && count++
    }
    return count
};
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0
    let hash = new Set(jewels)
    for(item of stones){
        hash.has(item) && count++
    }
    return count
};