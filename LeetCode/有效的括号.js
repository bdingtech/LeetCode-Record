/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !== 0){
        return false
    }
    //新建一个栈
    let stack = []
    //遍历字符串
    for(let i = 0; i < s.length; i++){
        let str = s[i]
        //开始判断
        if(str === '(' || str === '{' || str === '['){
            stack.push(str)
        } else {
            if(
                (stack[stack.length - 1] === '(' && str === ')')||
                (stack[stack.length - 1] === '[' && str === ']')||
                (stack[stack.length - 1] === '{' && str === '}')
            ){
                stack.pop()
            }else{
                return false
            }
        }
        
    }
    return stack.length === 0
};

/**
 * 得到
 * 1.判断一个数是否为偶数的方法为：是否能整除2
 * 2.本题的最后return stark.length 很简洁，少了一个if判断语句
 */