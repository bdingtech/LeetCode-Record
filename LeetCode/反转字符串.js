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