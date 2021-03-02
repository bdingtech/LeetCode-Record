/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let arr= []
    let maxNum = Math.max.apply(null,candies)
    for(let i = 0; i < candies.length; i++){
       let temp = candies[i] + extraCandies
       temp >= maxNum ? arr.push(true) : arr.push(false)
    }
    return arr
};