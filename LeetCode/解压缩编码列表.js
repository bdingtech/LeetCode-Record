/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let arr = []
    nums.forEach((item,index) => {
        if(!(index%2)){
            let count = item
            while(count > 0){
                arr.push(nums[index + 1])
                count--
            }
        }
    })
    return arr
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let result = []
    for(let i = 0; i < nums.length; i+=2){
        for(let j = 0; j < nums[i]; j++){
            result.push(nums[i+1])
        }
    }
    return result
};