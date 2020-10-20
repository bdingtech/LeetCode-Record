/**
 * 第一代
 * 但是sort好像未被了O(n)的规定
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    nums.sort((a , b) => (a - b))
    let arr = []
    nums.map((item,idx) => {nums[idx] - nums[idx-1] == 0 ? arr.push(nums[idx-1]): ''})
    return arr
};


/**
 * 第二代
 * 没看太懂，脑壳疼
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let result = []
    for(let i = 0; i < nums.length; i++ ){
        let num = Math.abs(nums[i])
        if(nums[num - 1] > 0 ){
            nums[num -1] *= -1
        }else{
            result.push(num)
        }
    }
    return result
};