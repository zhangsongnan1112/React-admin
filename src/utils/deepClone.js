// 定义一个深拷贝函数  接收目标target参数
function deepClone(target) {
    let result;
    // 如果当前需要深拷贝的是一个对象的话
    if (typeof target === 'object') {
    // 如果是一个数组的话
        if (Array.isArray(target)) {
            result = [];
            for (let i in target) {
                // 递归克隆数组中的每一项
                result.push(deepClone(target[i]))
            }
        } else if(target===null) {
            result = null;  
        } else if(target.constructor===RegExp){
            result = target;
        }else {
            result = {};
            for (let i in target) {
                result[i] = deepClone(target[i]);
            }
        }
    } else {
        result = target;
    }
    return result;
}

export default deepClone;