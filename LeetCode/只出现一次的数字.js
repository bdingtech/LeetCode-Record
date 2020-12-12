/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0
    nums.forEach(item => {
        result = item ^ result
    })
    return result
};

// 交换律：a ^ b ^ c <=> a ^ c ^ b

// 任何数于0异或为任何数 0 ^ n => n

// 相同的数异或为0: n ^ n => 0