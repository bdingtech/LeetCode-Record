/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.split('').sort().join('') == t.split('').sort().join('')
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    //将初始值通过一个对象计数
    let obj = {}
    for(let item of s){
        //初始化
        obj[item] = obj[item] || 0
        obj[item] += 1
    }
    //遍历另外一个字符串和数组做比对
    for(let item2 of t){
        if(!obj[item2]){
            return false
        }
        obj[item2] -= 1
    }
    //判断是否全部为0
    for(let item3 in obj){
        if(obj[item3] !== 0){
            return false
        }
    }
    return true
};