let person = {
    name:'pudding',
    hobby:{
        playComputer:true,
        programming:true,
        reading:true,
        writing:false
    },
    other:[1,2,3,4]
}

function deepClone(value){
    //先判断是否为引用类型
    if(typeof value != 'object'){
        return value
    }
    //初始化变量
    let result
    if(Array.isArray(result)){
        result = []
    }else{
        result = {}
    }
    //开始克隆
    for(item in value){
        if(value.hasOwnProperty(item)){
            result[item] = deepClone(value[item])
        }
    }
    return result
}

let person2 = deepClone(person)
person.name = 'jack'
console.log(person2)