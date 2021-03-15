/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let map = new Map()
    //先统计次数
    for (item of s) {
        if (!map.has(item)) {
            map.set(item, 1)
        } else {
            let value = map.get(item)
            map.set(item, ++value)
        }
    }

    let temp = [...map]
    let arr = temp.sort((a, b) => {
        return b[1] - a[1]
    })
    let str = ''
    arr.forEach(item => {
        for (let i = 0; i < item[1]; i++) {
            str += item[0]
        }
    })
    return str
};