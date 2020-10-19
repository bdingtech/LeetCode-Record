/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    //创建一个1-n的数组
    let arr = []
    for(let i = 1; i <= nums.length; i++){
        arr.push(i)
    }
    nums.map(item => {arr[item - 1] = null})
    return arr.filter(item => (item))
};