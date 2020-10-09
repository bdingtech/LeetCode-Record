/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lo = 0
    let hig = nums.length -1
    while(lo <= hig){
        let mid = parseInt(lo + (hig - lo) /  2) 
        if(target > nums[mid]){
            lo = mid + 1
        }else if(target < nums[mid]){
            hig = mid -1
        }
        if(target == nums[mid]){
            return mid
        }
    }
    return -1

};