/**
 * 我的解法
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0
    let maxCount = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 1){
            count++
        }
        if(nums[i] == 0){
            maxCount = Math.max(count,maxCount)
            count = 0
        }
        
    }
    return Math.max(count,maxCount)
};

/**
 * 在题解出看到的一行代码解法
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    return Math.max.apply(null,nums.join('').split('0').map((el)=>el.length))
};

/**
 * 得到
 * 1.在取最大值时，可使用 Math.max() ，更加方便操作
 * 2.apply()的作用不仅仅局限于改变 this 指向，还可以将 ([param1,param2,param3]) 转换成 (param1,param2,param3)
 */