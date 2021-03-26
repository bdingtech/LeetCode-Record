//instanceof的作用：判断变量是否是所属对象的实例
// 注意：'123' instanceof String 为false,这是因为'123'仅仅是一个sting类型的变量，而并不是string类型的实例【这里并未实现】

function myInstanceof(left,right){
    //原理是判断变量的原型是否在对象的原型链上
    //先获取原型
    let leftPrototype = left.__proto__
    let rightPrototype = right.prototype
    //不断遍历原型链
    while(leftPrototype !== null){
        if(rightPrototype == leftPrototype){
            return true
        }
        leftPrototype = leftPrototype.__proto__
    }
    return false
}