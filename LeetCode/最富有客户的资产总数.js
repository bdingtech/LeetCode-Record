/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sum = 0
    let result = 0
    for(let i = 0 ; i < accounts.length; i++){
        sum = 0
        for(let k = 0; k < accounts[i].length;k++){
            sum = sum + accounts[i][k]
        }
        if(sum >= result){
            result = sum
        }
    }
    return result
};