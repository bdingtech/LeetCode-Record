/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let index = 0
    nums.forEach((item) => {
        if(item != 0){
            nums[index] = item
            index++
        }
    })
    nums.fill(0,index)

};