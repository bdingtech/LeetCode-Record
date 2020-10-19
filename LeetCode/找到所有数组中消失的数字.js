/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    //创建一个1-n的数组
    let arr = Array.from({length:nums.length}).map((item,idx) => (idx + 1))
    nums.map(item => {arr[item - 1] = null})
    return arr.filter(item => (item))
};

/**
 * 得到
 * 1.Array.from可以根据有length属性的对象返回一个数组
 * 2.这种先生成数组，然后再打标记的方法比较秀，但是好像违背了题目不能额外创建空间的规定
 * 
 */