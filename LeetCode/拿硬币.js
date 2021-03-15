/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
    let count = 0
    coins.forEach(item => {
        if (item < 2) {
            count++
        } else {
            if (item % 2 === 0) {
                count += item / 2
            } else {
                count += ((item - 1) / 2) + 1
            }
        }
    })
    return count
};