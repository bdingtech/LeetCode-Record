/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let arr = []
    for(let i = 0; i < T.length; i++){
        //最后一位一定是0
        if(i === T.length -1){
            arr.push(0)
        }
        for(let j = i + 1; j < T.length; j++){
           if(T[j] > T[i]){
               arr.push(j-i)
               break
           }else if(j === T.length - 1){
               //到尾部
               arr.push(0)
           }
        }
    }
    return arr
};