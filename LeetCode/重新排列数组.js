/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr = []
    for(let i = 0; i < n; i++){
        arr.push(nums[i])
        arr.push(nums[n+i])
    }
    return arr
};
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    return nums.map((item, index, arr) => 
        (index % 2 ? arr[n + Math.floor(index / 2)] : arr[Math.floor(index / 2)])
    )
}; 