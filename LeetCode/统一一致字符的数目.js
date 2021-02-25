/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count  = 0
    words.forEach((item,index) => {
        for(let i = 0; i < item.length; i++){
            if(allowed.indexOf(item[i]) === -1){
                break
            }
            if(i === item.length - 1){
                count++
            }
        }
    })
    return count
};