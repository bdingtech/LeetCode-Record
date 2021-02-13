/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.reduce((acc,cur,currentIndex) => {
        acc.push(acc[currentIndex] + cur)
        return acc
    },[0]).slice(1)
};
