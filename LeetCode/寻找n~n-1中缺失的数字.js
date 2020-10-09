/**
 * 暴力破解法
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for(let i = 0; i <= nums.length; i++ ){
        if(nums[i] !== i)
        return i
    }
};

/**
 * 二分查找法
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let low = 0
    let hig = nums.length -1
    while(low <= hig){
        let mid = parseInt(low + (hig - low) /2)
        nums[mid] == mid ? low = mid + 1 : hig = mid -1
    }
    return low
};