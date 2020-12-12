/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let arr = [[]]
    for(let i = 0; i < nums.length; i++){
        arr.forEach(item => {
            arr.push(item.concat(nums[i]))
        })
    }
    return arr
};
//遇到一个数就把所有子集加上该数字组合新的子集
// 思路太骚了，想不到