/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    for (let i = 0, left = 0, right = s.length - 1; i < Math.ceil(s.length / 2); i++,left++,right--) {
        if (left < right) {
            let temp = s[left]
            s[left] = s[right]
            s[right] = temp
        }
    }
    return s
};

/**
 * 使用解构赋值
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    for (let i = 0, left = 0, right = s.length - 1; left < right; i++,left++,right--) {
        [s[left], s[right]] = [s[right], s[left]] //作为工具使用
    }
};

/**
 * 递归解法
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {

    let swap = (start, end) => {
        if (start >= end) {
            return
        }
        let temp = s[start]
        s[start] = s[end]
        s[end] = temp
        swap(start + 1, end - 1)

    }
    swap(0, s.length - 1)
    return s
};