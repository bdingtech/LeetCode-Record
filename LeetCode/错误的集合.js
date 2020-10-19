/**
 * 第一代
 * 暴力破解法
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let repeat
    let lost
    //输入数组是无序的，先排序
    nums.sort((a, b) => ( a - b))
    //去重
    let res = new Map()
    const arr = nums.filter((a) => !res.has(a) && res.set(a, 1))
    //寻找重复的数
    for(let i = 1; i <= nums.length; i++){
        if(nums[i] - nums[i - 1] == 0){
            repeat = nums[i - 1]
        }
        //寻找失踪的数
        for(let j = 1; j <= arr.length + 1; j++){
            if(arr[j - 1] !== j){
                lost = j
                break
            }
        }
    }
    return [repeat,lost]
    
};