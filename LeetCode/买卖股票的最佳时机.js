/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let arr = []
    for(let i = 0; i < prices.length; i++){
        for(let k = i + 1; k < prices.length; k++){
            let value = prices[i]
            let compare = prices[k]
            // console.log(compare)
            arr.push(compare - value)
        }
    }
    arr.sort((num1, num2) => {
    return num1 - num2 < 0
    })

    // let result = Math.max.apply(null,arr)
    return arr[0] >= 0 ? arr[0] : 0;
};