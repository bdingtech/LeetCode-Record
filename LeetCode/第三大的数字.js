/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if(nums.length < 3){
        return Math.max.apply(null,nums)
    }
    nums.sort((a,b) => (b - a) )
    const res = new Map();
    const arr = nums.filter((a) => !res.has(a) && res.set(a, 1))
    return arr.length < 3 ? Math.max.apply(null,arr) : arr[2]
};

/**
 * 得到
 * 1.sort([compareFunction(firstEl,secondEl)])中需指定compareFunction,数组将按照函数的返回值值排序，若没有指定则按照元素Unicode排序，compareFunciton返回 true 的时候比较两个值的大小，然后返回一个用于说明这两个值的相对顺序的数字。
 * 如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
 * 如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为， 而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
 * 如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。
 */