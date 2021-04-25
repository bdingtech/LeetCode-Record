/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function (s) {
    let hash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        let val = hash[s[i]]
        //这里虽然超出边界了，但是没有关系，undefined会进行隐式类型转换
        if (hash[s[i + 1]] > val) {
            val = hash[s[i + 1]] - val
            i++
        }
        sum += val
    }
    return sum
};