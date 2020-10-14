/**
 * 第一版
 * 命令式写法
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if(timeSeries.length == 0){
        return 0
    }
    let time = 0
    for(let i = 0; i < timeSeries.length - 1; i++){
        if(timeSeries[i + 1] - timeSeries[i] <= duration){
            time += timeSeries[i + 1] - timeSeries[i]
        }else{
            time += duration
        }
    }
    return time + duration
};


/**
 * 第二版
 * 函数式写法
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if(timeSeries.length == 0) return 0
    return timeSeries.length == 1 ? duration : timeSeries.reduce((time,item,index) => {
        if(index >= timeSeries.length - 1) {
            return duration + time
        }else {
            let diff = timeSeries[index + 1] - timeSeries[index]
            return diff >= duration ? time += duration : time += diff
        }
    },0)
};

/**
 * 得到
 * 1.当涉及到判断条件有i+1等情形时，应考虑边界为arr.length - 1
 * 2.在三元运算之前加return可返回计算之后的值
 * 3.首先考虑边界跳出情况比如这里就是当索引值大于等于数组边界的时候返回
 * 4.多使用高阶函数
 */