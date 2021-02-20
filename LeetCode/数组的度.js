/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let hash = {}
    let maxNum = []
    let result = 0
    //先计数
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = {
                times: 1,
                start: i,
                end: i,
                distance: 0
            }
        } else {
            hash[nums[i]].times++
            hash[nums[i]].end = i
            hash[nums[i]].distance = hash[nums[i]].end - hash[nums[i]].start
        }
    }
    //转换成数组
    for (let item in hash) {
        maxNum.push(hash[item])
    }
    maxNum.sort((first, second) => {
        return second.times - first.times
    })
    if (maxNum.length > 1) {
        if (maxNum[0].times == maxNum[1].times) {
            let temp = []
            temp.push(maxNum[0])
            for (let i = 1; i < maxNum.length; i++) {
                if (maxNum[i].times === maxNum[0].times) {
                    temp.push(maxNum[i])
                }
            }
            temp.sort((first,second) => {
                return first.distance - second.distance
            })
            console.log(temp)
            return temp[0].distance + 1

        }
    }
    return maxNum[0].distance + 1
};