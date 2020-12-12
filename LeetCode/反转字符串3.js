/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(" ")
    let result = arr.map(item => {
        return item.split("").reverse().join("")
    })
    return result.join(" ")
};

//自己想到的解法，比评论里面的要骚，开心