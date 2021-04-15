/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hash = new Map()
    let mainNum = Math.floor(nums.length / 2)
    nums.forEach((item) => {
        let times = hash.get(item)
        times ? hash.set(item , ++times) : hash.set(item,1)
    })
    for(let i = 0 ; i < nums.length; i++){
        if(hash.get(nums[i]) > mainNum){
            return nums[i]
        }
    }
};